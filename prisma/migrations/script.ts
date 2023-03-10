// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

// app.post('/submit-form', async (req, res) => {
//   const { albumCoverImage, albumName, releaseYear, favoriteSong, artistName, userName } = req.body

//   try {
//     const newPost = await prisma.post.create({
//       data: {
//         albumCoverImage,
//         albumName,
//         releaseYear,
//         favoriteSong,
//         artistName,
//         userName,
//       },
//     })
//     res.status(201).json({ message: 'Post created', post: newPost })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Error creating post' })
//   }
// })
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post("/submit-form", async (req, res) => {
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
});

const server = app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
