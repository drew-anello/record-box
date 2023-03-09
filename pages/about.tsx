import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function About() {
    return (
        <div className="bg-purple-800 flex flex-col justify-center items-center h-screen">
            <div className="bg-white p-2 md:p-4 rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-bold text-purple-800 mb-4">
                    About Record Box
                </h1>
                <div className="flex justify-center items-center mb-4">
                    <Image
                        src="https://i.imgur.com/lFl8rSH.jpg"
                        alt="Picture of Drew Anello"
                        className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto rounded-full"
                        domains={["i.imgur.com"]}
                        width={75}
                        height={75}
                    />
                </div>
                <p className="text-xl text-gray-800 mb-4">
                    My name is Drew Anello and I'm a former professional musician. I was
                    inspired to create Record Box because my friends and I were constantly
                    sending each other the same albums over and over to check out, and I
                    wanted to create a more organized location. I built this app using
                    Next.js and Tailwind, and used TypeScript and Prisma to improve the
                    code quality and performance.
                </p>
                <div className="flex justify-center items-center mb-4">
                    <a
                        href="https://github.com/drew-anello"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-800 mx-4 hover:text-purple-800"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/drew-anello/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-800 mx-4 hover:text-purple-800"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}
