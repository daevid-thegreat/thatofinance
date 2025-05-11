import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import {auth} from "@/auth";
import {$Enums} from "@/prisma/generated/client";
import ApplicationStatus = $Enums.ApplicationStatus;

export async function GET(request: Request) {
  const session = await auth();

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    // const status = searchParams.get('status') || ""; // Default to empty string if status is null
    const page = parseInt(searchParams.get('page') || "1", 10); // Default to "1" as string if page is null
    const limit = parseInt(searchParams.get('limit') || "10", 10); // Default to "10" as string if limit is null


    const status = searchParams.get('status') || undefined;

const where: { status?: ApplicationStatus } = {};

if (status) {
  where.status = status as ApplicationStatus; // Cast to ApplicationStatus enum type
}

const applications = await prisma.loanApplication.findMany({
  where,
  skip: (page - 1) * limit,
  take: limit,
  orderBy: { createdAt: 'desc' },
  include: {
    user: {
      select: {
        firstName: true,
        lastName: true,
        email: true
      }
    }
  }
});

    const total = await prisma.loanApplication.count({ where });

    return NextResponse.json({
      applications,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Admin applications error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}
