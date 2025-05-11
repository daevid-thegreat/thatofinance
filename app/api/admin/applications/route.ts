// app/api/admin/applications/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import {auth} from "@/auth";

export async function GET(request: Request) {
  const session = await auth();

  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || 1);
    const limit = parseInt(searchParams.get('limit') || 10);

    const where = status ? { status } : {};

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