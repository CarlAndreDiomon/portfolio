import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div className="flex">
                <Link href="/" className="text-gray-900 text-lg font-bold">Carl&apos;s Portfolio</Link>
            </div>
            <div className="hidden md:flex space-x-4">
                <Link href="/About" className="text-gray-900 hover:text-gray-700">About</Link>
                <Link href="/Projects" className="text-gray-900 hover:text-gray-700">Projects</Link>
                <Link href="/Contact" className="text-gray-900 hover:text-gray-700">Contact</Link>
            </div>
            </div>
        </div>
        </nav>
    )
}