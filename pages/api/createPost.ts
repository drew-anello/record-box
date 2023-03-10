import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type PostData = {
  albumCoverImage: string;
  albumName: string;
  releaseYear: number;
  favoriteSong: string;
  artistName: string;
  userName: string;
};

export default async function createPost(postData: PostData) {
  const { albumCoverImage, albumName, releaseYear, favoriteSong, artistName, userName } = postData;

  try {
    const newPost = await prisma.post.create({
      data: {
        albumCoverImage,
        albumName,
        releaseYear,
        favoriteSong,
        artistName,
        userName,
      },
    });
    return newPost;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating post");
  }
}
