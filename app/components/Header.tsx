import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return(
        <header className="w-full flex items-center justify-center top-0 left-0 fixed p-4">
            <Link href="/">
               <Image src="/ku.svg" alt="Logo" className="w-15 h-15" width={60} height={60} />
            </Link>
        </header>
    )
}