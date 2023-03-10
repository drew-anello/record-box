import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { albumCoverImage, albumName, releaseYear, favoriteSong, artistName, userName } = req.body;

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
    res.status(201).json({ message: "Post created", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating post" });
  }
}
