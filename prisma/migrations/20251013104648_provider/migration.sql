-- AlterTable
ALTER TABLE "User" ADD COLUMN     "provider" TEXT,
ALTER COLUMN "Password" DROP NOT NULL;
