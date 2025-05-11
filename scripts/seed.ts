import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';


async function seedAdmin() {
  try {
    const hashedPassword = await bcrypt.hash('admin123047pass!', 10);

    await prisma.user.upsert({
      where: { email: 'admin@thatofinance.net' },
      update: {},
      create: {
        email: 'admin@thatofinance.net',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'User',
        role: 'ADMIN',
        isActive: true
      }
    });

    console.log('Admin user seeded successfully');
  } catch (error) {
    console.error('Error seeding admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedAdmin();
