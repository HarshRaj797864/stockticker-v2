/*
  Warnings:

  - You are about to drop the column `down` on the `market_data` table. All the data in the column will be lost.
  - You are about to drop the column `up` on the `market_data` table. All the data in the column will be lost.
  - Added the required column `high` to the `market_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `low` to the `market_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "market_data" DROP COLUMN "down",
DROP COLUMN "up",
ADD COLUMN     "high" DECIMAL(15,6) NOT NULL,
ADD COLUMN     "low" DECIMAL(15,6) NOT NULL;
