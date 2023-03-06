import Link from "next/link";

export default function Nav () {
    return(
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/add">Add A Record</Link>
                </li>
                <li>
                    <Link href="/about">About Record Box</Link>
                </li>
            </ul>
        </div>
    )
}