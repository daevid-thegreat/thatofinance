import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params } : { params: Promise<{ id: string }> }
) {
  const session = await auth();

  // Verify admin access
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Application ID is required" }, { status: 400 });
  }

  try {
    const application = await prisma.loanApplication.findUnique({
      where: { id },
      include: {
        idDocument: true,
        payslip: true,
        bankStatement: true,
      },
    });

    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    return NextResponse.json({ application });
  } catch (error) {
    console.error("Error fetching application:", error);
    return NextResponse.json(
      { error: "Failed to fetch application details" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
 { params } : { params: Promise<{ id: string }> }
) {
  const session = await auth();

  // Verify admin access
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Application ID is required" }, { status: 400 });
  }

  try {
    const { status } = await request.json();

    if (!["APPROVED", "REJECTED"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status. Allowed values: APPROVED, REJECTED" },
        { status: 400 }
      );
    }

    const updatedApplication = await prisma.loanApplication.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ application: updatedApplication });
  } catch (error) {
    console.error("Error updating application status:", error);
    return NextResponse.json(
      { error: "Failed to update application status" },
      { status: 500 }
    );
  }
}
