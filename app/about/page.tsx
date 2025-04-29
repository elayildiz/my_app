import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-forest-green text-baby-pink p-8">
      <h1 className="text-4xl font-bold font-fairy text-center mb-6">My Top 3 Favourite Songs 🎶</h1>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-72">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dUP7fA2BAfw"
            title="Louisa – Lord Huron"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="mt-2 text-center text-baby-blue">Louisa – Lord Huron</p>
        </div>

        <div className="w-72">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/cJRP3LRcUFg"
            title="This Charming Man – The Smiths"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="mt-2 text-center text-baby-blue">This Charming Man – The Smiths</p>
        </div>

        <div className="w-72">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/Jl8iYAo90pE"
            title="Caribbean Blue – Enya"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="mt-2 text-center text-baby-blue">Caribbean Blue – Enya</p>
        </div>
      </div>
    </div>
  )
}