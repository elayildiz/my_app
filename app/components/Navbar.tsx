'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-green-200 text-dark-pink p-4 flex justify-between items-center shadow-md font-fairy">
            <div className="text-2xl font-fairy">Ela’s Site</div>
            <div className="space-x-4">
                <Link href="/" className="text-navy-blue hover:underline">Home</Link>
                <Link href="/about" className="text-navy-blue hover:underline">About</Link>
                <Link href="/order" className="text-navy-blue text-sage-800 hover:text-sage-600">Order</Link>
            </div>
        </nav>
    )
}