// import { createPost } from './prisma/script'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     await createPost(req, res)
//   } else {
//     res.status(405).json({ message: 'Method not allowed' })
//   }
// }
import { NextApiRequest, NextApiResponse } from 'next';
import createPost from '../api/createPost'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const newPost = await createPost(req.body);
    res.status(201).json({ message: "Post created", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating post" });
  }
}
