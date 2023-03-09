-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "albumCoverImage" TEXT NOT NULL,
    "albumName" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "favoriteSong" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
