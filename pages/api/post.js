import { PrismaClient } from '@prisma/client'

export default async function handler (req, res) {
  const prisma = new PrismaClient()
  const { albumCoverImage, albumName, releaseYear, favoriteSong, userName } =
    req.body

  try {
    const newPost = await prisma.post.create({
      data: {
        albumCoverImage,
        albumName,
        releaseYear,
        favoriteSong,
        userName
      }
    })
    res.status(201).json({ message: 'Post created', post: newPost })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating post' })
  } finally {
    await prisma.$disconnect()
  }
}
