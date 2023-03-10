import type { NextPage } from "next"
import Info from "../components/Info"
import { PrismaClient } from "@prisma/client"

type Post = {
  id: number;
  albumCoverImage: string;
  albumName: string;
  releaseYear: number;
  favoriteSong: string;
  artistName: string;
  userName: string;
};

type Props = {
  posts: Post[]
};
const prisma = new PrismaClient()

export const getStaticProps = async () => {
  const posts = await prisma.post.findMany();
  return {
    props: { posts },
  };
};
const Home: NextPage<Props> = ({ posts }) => {
  return (

    <div>

      <h1 className="text-3xl font-bold text-blue-500 my-10 text-center w-full">Record Box</h1>
      <Info posts={posts} />

    </div>
  )
}
export default Home