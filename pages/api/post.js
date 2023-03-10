import createPost from './createPost'

export default async function handler (req, res) {
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
    const newPost = await createPost({
      albumCoverImage: image,
      albumName,
      releaseYear,
      favoriteSong,
      artistName,
      userName
    })
    res.status(201).json({ message: 'Post created', post: newPost })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating post' })
  }
}
