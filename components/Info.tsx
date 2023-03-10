import { FC } from "react";
import Posts from '../pages/api/post'

type Props = {
    posts: Post[];
};

const Info: FC<Props> = ({ posts }) => {
    return (

        <div className="flex flex-wrap justify-center">
            {posts.map((post) => (
                <div
                    key={post.albumName}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-2"
                >
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img
                            className="w-full h-48 object-cover"
                            src={post.albumCoverImage}
                            alt={post.albumName}
                        />
                        <div className="px-6 py-4 bg-white">
                            <div className="font-bold text-xl mb-2">{post.albumName}</div>
                            <p className="text-gray-700 text-base">{post.artistName}</p>
                            <p className="text-gray-700 text-base">{post.releaseYear}</p>
                            <p className="text-gray-700 text-base">{post.favoriteSong}</p>
                            <p className="text-gray-700 text-base">Shared by: {post.userName}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Info;
