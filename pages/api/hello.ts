import { createPost } from './prisma/script'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await createPost(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
