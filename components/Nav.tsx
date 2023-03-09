import Link from "next/link";

export default function Nav() {
    return (
        <div>
            <ul className="flex justify-between inline-block border border-blue-500 bg-blue-500 rounded py-4  bg-blue-500 hover:bg-blue-700 text-white">
                <li className="ml-10 ">
                    <Link href="/">Home</Link>
                </li>
                <li className=" ml-10" >
                    <Link href="/add">Add A Record</Link>
                </li>
                <li className="ml-15 mr-10">
                    <Link href="/about">About Record Box</Link>
                </li>

            </ul>
        </div>
    )
}