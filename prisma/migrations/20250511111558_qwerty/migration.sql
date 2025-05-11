/*
  Warnings:

  - You are about to drop the column `bankStatementApplicationId` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `idDocumentApplicationId` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `payslipApplicationId` on the `Document` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idDocumentId]` on the table `LoanApplication` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payslipId]` on the table `LoanApplication` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bankStatementId]` on the table `LoanApplication` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_bankStatementApplicationId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_idDocumentApplicationId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_payslipApplicationId_fkey";

-- DropIndex
DROP INDEX "Document_bankStatementApplicationId_key";

-- DropIndex
DROP INDEX "Document_idDocumentApplicationId_key";

-- DropIndex
DROP INDEX "Document_payslipApplicationId_key";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "bankStatementApplicationId",
DROP COLUMN "idDocumentApplicationId",
DROP COLUMN "payslipApplicationId";

-- AlterTable
ALTER TABLE "LoanApplication" ADD COLUMN     "bankStatementId" TEXT,
ADD COLUMN     "idDocumentId" TEXT,
ADD COLUMN     "payslipId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "LoanApplication_idDocumentId_key" ON "LoanApplication"("idDocumentId");

-- CreateIndex
CREATE UNIQUE INDEX "LoanApplication_payslipId_key" ON "LoanApplication"("payslipId");

-- CreateIndex
CREATE UNIQUE INDEX "LoanApplication_bankStatementId_key" ON "LoanApplication"("bankStatementId");

-- AddForeignKey
ALTER TABLE "LoanApplication" ADD CONSTRAINT "LoanApplication_idDocumentId_fkey" FOREIGN KEY ("idDocumentId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanApplication" ADD CONSTRAINT "LoanApplication_payslipId_fkey" FOREIGN KEY ("payslipId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanApplication" ADD CONSTRAINT "LoanApplication_bankStatementId_fkey" FOREIGN KEY ("bankStatementId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
