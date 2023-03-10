import { PrismaClient } from '@prisma/client'

export default async function handler (req, res) {
  const prisma = new PrismaClient()
  const {
    albumCoverImage,
    albumName,
    releaseYear,
    favoriteSong,
    artistName,
    userName
  } = req.body

  const image = albumCoverImage || 'https://i.imgur.com/zVSRc6d.jpg'

  try {
    const newPost = await prisma.post.create({
      data: {
        albumCoverImage: image,
        albumName,
        releaseYear,
        favoriteSong,
        artistName,
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
export Default Post