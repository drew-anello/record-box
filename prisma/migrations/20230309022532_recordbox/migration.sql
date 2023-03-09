/*
  Warnings:

  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Added the required column `albumCoverImage` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `albumName` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseYear` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
DROP COLUMN "published",
DROP COLUMN "title",
ADD COLUMN     "albumCoverImage" TEXT NOT NULL,
ADD COLUMN     "albumName" TEXT NOT NULL,
ADD COLUMN     "favoriteSong" TEXT,
ADD COLUMN     "releaseYear" INTEGER NOT NULL;
