import Link from "next/link";

export default function Nav () {
    return(
        <div>
            <ul className="flex justify-between inline-block border border-blue-500 bg-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
                <li className="mr-3 ">
                    <Link href="/">Home</Link>
                </li>
                <li className="mr-3">
                    <Link href="/add">Add A Record</Link>
                </li>
                <li className="mr-3">
                    <Link href="/about">About Record Box</Link>
                </li>
            </ul>
        </div>
    )
}