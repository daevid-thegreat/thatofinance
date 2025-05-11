// app/api/upload/route.ts
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const applicationId = formData.get('applicationId') as string;
  const documentType = formData.get('documentType') as 'id' | 'payslip' | 'bankStatement';

  if (!file || !applicationId || !documentType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    // Upload to Vercel Blob
    const blob = await put(`loan-applications/${applicationId}/${documentType}-${file.name}`, file, {
      access: 'public',
    });

    // Create document record
    const document = await prisma.document.create({
      data: {
        url: blob.url,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        blobPath: blob.pathname,
      }
    });

    // Link to loan application
    const updateData = {
      [`${documentType}DocumentId`]: document.id
    };

    await prisma.loanApplication.update({
      where: { id: applicationId },
      data: updateData
    });

    return NextResponse.json({ success: true, document });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}