import '../app/globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* ✨ Sparkles floating behind the main content */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-sparkle absolute top-10 left-20 text-pink-300 text-xl">✨</div>
        <div className="animate-sparkle delay-2000 absolute top-1/2 left-1/3 text-purple-300 text-2xl">✨</div>
        <div className="animate-sparkle delay-1000 absolute bottom-10 right-16 text-yellow-200 text-lg">✨</div>
        <div className="animate-sparkle delay-3000 absolute top-1/4 right-1/4 text-baby-pink text-xl">✨</div>
      </div>

      {/* 💖 Main content */}
      <main className="bg-gradient-to-b from-pink-100 via-white to-pink-50 text-navy-blue p-6 flex flex-col items-center justify-center min-h-screen font-fairy">

        <h1 className="bg-white text-dark-pink text-4xl font-bold rounded-3xl p-6 px-10 shadow-xl border-2 border-pink-200 text-center">
          ✨ Hello! I’m Ela 🐢 ✨
        </h1>

        <p className="text-center mt-4 text-lg animate-fade-in">
          I’m a software engineering student who likes ✈️ flying planes, 🎶 music, and 🎬 movies.
        </p>

        <div className="mt-6">
          <Image
            src="/me-cool.jpg"
            alt="Me doing something cool"
            width={300}
            height={300}
            className="rounded-2xl border-4 border-baby-pink shadow-lg hover:rotate-2 transition-transform duration-300"
          />
        </div>

        <div className="mt-6 text-center">
          <Link
            href="https://chat.openai.com"
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-purple-100 text-navy-blue font-semibold rounded-full shadow-md hover:bg-purple-300 transition duration-300"
          >
            💻 My favourite website (ChatGPT, obviously)
          </Link>
        </div>
      </main>
    </>
  )
}
