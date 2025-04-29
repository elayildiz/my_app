'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-forest-green text-baby-pink p-4 flex justify-between items-center shadow-md">
            <div className="text-2xl font-fairy">Ela’s Site</div>
            <div className="space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
            </div>
        </nav>
    )
}