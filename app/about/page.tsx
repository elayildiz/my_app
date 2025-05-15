import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-pink-50 text-navy-blue p-8 flex items-center justify-center font-fairy">
      <div className="bg-white bg-opacity-80 rounded-3xl p-8 shadow-xl max-w-4xl w-full">
        <h1 className="text-dark-pink text-4xl font-extrabold rounded-xl p-6 shadow-md text-center mb-10 select-none">
          🎶 My Favourite Songs 🎶
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              src: "https://www.youtube.com/embed/dUP7fA2BAfw",
              title: "Louisa – Lord Huron",
              color: "text-baby-blue",
            },
            {
              src: "https://www.youtube.com/embed/cJRP3LRcUFg",
              title: "This Charming Man – The Smiths",
              color: "text-baby-pink",
            },
            {
              src: "https://www.youtube.com/embed/Jl8iYAo90pE",
              title: "Caribbean Blue – Enya",
              color: "text-baby-purple",
            },
          ].map(({ src, title, color }) => (
            <div
              key={title}
              className="w-72 bg-pink-100 rounded-xl shadow-md p-3 hover:shadow-xl transition-shadow duration-300"
            >
              <iframe
                className="w-full h-44 rounded-lg border-4 border-pink-200"
                src={src}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className={`mt-3 text-center font-semibold ${color} select-none`}>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}