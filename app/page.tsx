import '../app/globals.css';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-forest-green text-baby-blue p-6 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-4xl font-bold font-fairy">Hello! I’m Ela 💕</h1>

      <p className="text-center mt-4 text-lg">
        I’m a software engineering student who likes to fly planes, play guitar and watch classic romcoms.
      </p>

      <div className="mt-6">
        <Image
          src="/me-cool.jpg"
          alt="Me doing something cool"
          width={516}
          height={292.5}
          className="rounded-full"
        />
      </div>

      <div className="mt-6 text-center">
        <Link href="https://chat.openai.com" target="_blank" className="inline-block mt-4 px-6 py-2 bg-lavender text-baby-pink font-medium rounded-full shadow-md hover:bg-forest-green hover:text-baby-pink transition-colors duration-300">
          My favourite website (ChatGPT, obviously)
        </Link>

        <div className="mt-4">
        </div>
      </div>
    </main>
  )
}
