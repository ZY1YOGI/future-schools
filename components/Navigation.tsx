'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi'
import { BsBarChartSteps, BsSearch } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
// import Aos from "aos";


export default function Navigation() {
  const switchMenu = useRef<HTMLUListElement>(null)

  useEffect(() => {
    // Aos.init()
    const theme = localStorage.getItem("theme") ?? localStorage.setItem("theme", "light")
    if (theme === "light") {
      document.documentElement.className = "light";
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme === "dark") {
      document.documentElement.className = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    }

  })

  return (
    <nav className="navigation">
      {/* left Header */}
      <div className="flex items-center justify-center space-x-1.5 cursor-pointer">
        <Image src="/logo.png" alt="logo future schools" width={50} height={50} priority={true} className='dark:bg-white rounded-full' />
        <Link href='/' className="text-2xl font-bold dark:text-teal-50">Future</Link>
      </div>
      {/* left Header */}

      {/* navigation */}
      <ul className='nav-links' ref={switchMenu}>
        <li><Link className='nav-link' href="/">Home</Link></li>
        <li><Link className='nav-link' href="/profile">Profile</Link></li>
        <li><Link className='nav-link' href="/">Editor</Link></li>
        <li><Link className='nav-link' href="/">Services</Link></li>

        <li className="relative nav-link group" id="nav-link-categories">
          <button className="flex items-center">Rooms <BsBarChartSteps className='ml-1.5' /></button>
          <ul role="menu" className="group-hover:block z-50 text-center absolute hidden w-40 whitespace-nowrap space-y-5 top-8 left-[50%] max-md:left-[12%] border-4 border-x-white border-y-primary rounded-xl py-3 px-1 bg-body-light dark:bg-body-dark">
            <li><Link className='nav-link min-w-full' href="/">@</Link></li>
            <li><Link className='nav-link' href="/">@</Link></li>
            <li><Link className='nav-link' href="/">@</Link></li>
            <li><Link className='nav-link' href="/">@</Link></li>
          </ul>
        </li>

        <button className='btn-search' role="search" id="model-search">
          <BsSearch size={25} />
        </button>

        <button className='btn-theme' role="switch" id="switch-theme" aria-checked="true" onClick={() => localStorage.getItem('theme') === 'light' ? (document.documentElement.className = 'dark', document.documentElement.setAttribute('data-theme', 'dark'), localStorage.setItem('theme', 'dark')) : (document.documentElement.className = 'light', document.documentElement.setAttribute('data-theme', 'light'), localStorage.setItem('theme', 'light'))}>
          <MdDarkMode size={28} />
        </button>
      </ul>
      {/* navigation */}

      {/* Right Header */}
      <button className='hidden max-md:block' onClick={() => switchMenu.current?.classList.toggle('!flex')} role="switch" aria-label='switch menu' aria-checked='mixed'>
        <FaBars size={25} className='dark:text-white' />
      </button>

      <Link className='btn-auth space-x-3' href="/auth">
        <BiUserCircle size={26} title='login user' />
        Login
      </Link>
      {/* Right Header */}
    </nav>
  )
}
