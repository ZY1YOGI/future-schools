
import { Metadata } from "next"
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'The Home page'
}

export default function Home() {


  return (
    <>
      <header className="h-screen shadow-md">
        <nav className="flex justify-between px-[3%]">
          {/* left Header */}
          <div className="flex items-center justify-center space-x-3 cursor-pointer">
            <Image src="/logo.png" alt="logo future schools" width={50} height={50} />
            <h1 className="text-2xl font-bold dark:text-teal-50">Future</h1>
          </div>
          {/* left Header */}


          {/* Negative */}
          <ul className="negative">

          </ul>
          {/* Negative */}


          {/* Right Header */}
          {/* Right Header */}
        </nav>
      </header>
    </>
  )
}
