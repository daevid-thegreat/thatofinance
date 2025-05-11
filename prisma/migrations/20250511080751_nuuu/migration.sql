-- CreateEnum
CREATE TYPE "LoanType" AS ENUM ('EMERGENCY', 'BUSINESS', 'THATOFIX', 'SECOND_SALARY', 'LOAN_READVANCE');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('CONTRACT', 'FULL_TIME', 'PART_TIME', 'OTHER');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Race" AS ENUM ('WHITE_CAUCASIAN', 'BLACK_AFRICAN_AMERICAN', 'HISPANIC_LATINO', 'ASIAN', 'OTHER');

-- CreateEnum
CREATE TYPE "MaritalProperty" AS ENUM ('COP', 'ANC', 'OTHER');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'FUNDED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'LOAN_OFFICER', 'REVIEWER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanApplication" (
    "id" TEXT NOT NULL,
    "loanType" "LoanType" NOT NULL,
    "loanAmount" DOUBLE PRECISION NOT NULL,
    "loanTerm" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "maritalProperty" "MaritalProperty",
    "gender" "Gender" NOT NULL,
    "cell" TEXT NOT NULL,
    "whatsapp" TEXT,
    "email" TEXT NOT NULL,
    "race" "Race" NOT NULL,
    "employer" TEXT NOT NULL,
    "employmentType" "EmploymentType" NOT NULL,
    "lengthOfEmployment" INTEGER NOT NULL,
    "employeeNumber" TEXT NOT NULL,
    "dependants" INTEGER NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "employerTelephone" TEXT NOT NULL,
    "employerEmail" TEXT NOT NULL,
    "netIncome" DOUBLE PRECISION NOT NULL,
    "basicIncome" DOUBLE PRECISION NOT NULL,
    "livingExpenses" DOUBLE PRECISION NOT NULL,
    "monthlyLoanRepayments" DOUBLE PRECISION NOT NULL,
    "totalExpenses" DOUBLE PRECISION NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "accountHolder" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "rejectionReason" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reviewedAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "fundedAt" TIMESTAMP(3),

    CONSTRAINT "LoanApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "blobPath" TEXT NOT NULL,
    "idDocumentApplicationId" TEXT,
    "payslipApplicationId" TEXT,
    "bankStatementApplicationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "details" JSONB,
    "userId" TEXT NOT NULL,
    "loanApplicationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Document_url_key" ON "Document"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Document_blobPath_key" ON "Document"("blobPath");

-- CreateIndex
CREATE UNIQUE INDEX "Document_idDocumentApplicationId_key" ON "Document"("idDocumentApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_payslipApplicationId_key" ON "Document"("payslipApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_bankStatementApplicationId_key" ON "Document"("bankStatementApplicationId");

-- AddForeignKey
ALTER TABLE "LoanApplication" ADD CONSTRAINT "LoanApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_idDocumentApplicationId_fkey" FOREIGN KEY ("idDocumentApplicationId") REFERENCES "LoanApplication"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_payslipApplicationId_fkey" FOREIGN KEY ("payslipApplicationId") REFERENCES "LoanApplication"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_bankStatementApplicationId_fkey" FOREIGN KEY ("bankStatementApplicationId") REFERENCES "LoanApplication"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_loanApplicationId_fkey" FOREIGN KEY ("loanApplicationId") REFERENCES "LoanApplication"("id") ON DELETE SET NULL ON UPDATE CASCADE;
