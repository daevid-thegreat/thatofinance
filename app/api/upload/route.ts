import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const applicationId = formData.get('applicationId') as string;
  const documentType = formData.get('documentType') as 'idDocument' | 'payslip' | 'bankStatement';

  if (!file || !applicationId || !documentType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    // 1. Fetch the loan application and related documents
    const loanApplication = await prisma.loanApplication.findUnique({
      where: { id: applicationId },
      select: {
        idDocument: { select: { id: true } },
        payslip: { select: { id: true } },
        bankStatement: { select: { id: true } },
      },
    });

    // Determine which document ID to update or create
    let existingDocumentId: string | null = null;

    if (documentType === 'idDocument') {
      existingDocumentId = loanApplication?.idDocument?.id ?? null;
    } else if (documentType === 'payslip') {
      existingDocumentId = loanApplication?.payslip?.id ?? null;
    } else if (documentType === 'bankStatement') {
      existingDocumentId = loanApplication?.bankStatement?.id ?? null;
    }

    // 2. Upload file to Vercel Blob
    const blob = await put(
      `loan-applications/${applicationId}/${documentType}-${file.name}`,
      file,
      { access: 'public' }
    );

    // Document data to store
    const documentData = {
      url: blob.url,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      blobPath: blob.pathname,
    };

    let document;

    if (existingDocumentId) {
      await prisma.document.update({
        where: { id: existingDocumentId },
        data: documentData,
      });
    } else {
      // 4. Create a new document
      document = await prisma.document.create({
        data: {
          ...documentData,
          // Establish the relation for the document type
          [documentType === 'idDocument'
            ? 'idDocumentApplication'
            : documentType === 'payslip'
            ? 'payslipApplication'
            : 'bankStatementApplication']: {
            connect: { id: applicationId },
          },
        },
      });

      // 5. Now that we have a document, update the LoanApplication with the new document ID

      // Explicitly define the updateData object type
      const updateData: { [key: string]: string } = {}; // This allows dynamic keys

      // Set the right field in the LoanApplication model based on the document type
      if (documentType === 'idDocument') {
        updateData['idDocumentId'] = document.id;
      } else if (documentType === 'payslip') {
        updateData['payslipId'] = document.id;
      } else if (documentType === 'bankStatement') {
        updateData['bankStatementId'] = document.id;
      }

      // 6. Update the loan application with the newly created document ID
      await prisma.loanApplication.update({
        where: { id: applicationId },
        data: updateData, // Dynamically update the appropriate field
      });
    }

    // 7. Fetch updated loan application with document details
    const updatedApplication = await prisma.loanApplication.findUnique({
      where: { id: applicationId },
      include: {
        idDocument: true,
        payslip: true,
        bankStatement: true,
      },
    });

    return NextResponse.json({ success: true, application: updatedApplication });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
