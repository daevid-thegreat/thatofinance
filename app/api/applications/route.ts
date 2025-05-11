import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate data
    if (!data.loanAmount || data.loanAmount < 350 || data.loanAmount > 3500) {
      return NextResponse.json(
        { error: 'Loan amount must be between R350 and R3500' },
        { status: 400 }
      );
    }

    // Create application
    const application = await prisma.loanApplication.create({
      data: {
        ...data,
        status: 'PENDING'
      }
    });

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error('Application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}