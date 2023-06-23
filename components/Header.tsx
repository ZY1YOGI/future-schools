'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi'
import { BsBarChartSteps, BsSearch } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import Aos from "aos";


export default function Header() {

  const switchMenu = useRef<HTMLUListElement>(null)

  useEffect(() => {
    Aos.init()
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
    <header className="">
      <nav className="negative">
        {/* left Header */}
        <div className="flex items-center justify-center space-x-1.5 cursor-pointer">
          <Image src="/logo.png" alt="logo future schools" width={55} height={55} priority={true} className='dark:bg-white rounded-full' />
          <Link href='/' className="text-2xl font-bold dark:text-teal-50">Future</Link>
        </div>
        {/* left Header */}

        {/* Negative */}
        <ul className='nav-links' ref={switchMenu}>
          <Link className='nav-link' href="/">Home</Link>
          <Link className='nav-link' href="/">Profile</Link>
          <Link className='nav-link' href="/">Editor</Link>
          <Link className='nav-link' href="/">Services</Link>
          <li className="relative nav-link group" id="nav-link-categories">
            <button className="flex items-center">Rooms <BsBarChartSteps className='ml-1.5' /></button>
            <ul role="menu" className="group-hover:block z-50 text-center absolute hidden w-40 whitespace-nowrap space-y-5 top-8 left-[50%] max-md:left-[12%] border-4 border-x-white border-y-primary rounded-xl py-3 px-1 bg-body-light dark:bg-body-dark">
              <li className=''>
                <Link className='nav-link min-w-full' href="/">@</Link>
              </li>
              <li>
                <Link className='nav-link' href="/">@</Link>
              </li>
              <li>
                <Link className='nav-link' href="/">@</Link>
              </li>
              <li>
                <Link className='nav-link' href="/">@</Link>
              </li>

            </ul>
          </li>

          <button className='btn-search' role="search" id="model-search">
            <BsSearch size={25} />
          </button>

          <button className='btn-theme' role="switch" id="switch-theme" aria-checked="true" onClick={() => localStorage.getItem('theme') === 'light' ? (document.documentElement.className = 'dark', document.documentElement.setAttribute('data-theme', 'dark'), localStorage.setItem('theme', 'dark')) : (document.documentElement.className = 'light', document.documentElement.setAttribute('data-theme', 'light'), localStorage.setItem('theme', 'light'))}>
            <MdDarkMode size={28} />
          </button>
        </ul>
        {/* Negative */}

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

      <section className='container mx-auto flex max-md:flex-col md:items-center mt-8'>
        <section className="md:w-1/2 max-md:text-center flex-1">
          <h1 className="text-3xl mb-5 text-[#070439] dark:text-white max-md:px-1" data-aos="fade-down" data-aos-delay="150">Future Schools We care about all the details of our students</h1>
          <p className="font-semibold mb-8 text-[#444444] dark:text-gray-300 max-md:px-2" data-aos="fade-up" data-aos-delay="350">
            Modern Future Schools are apprentice schools that offer different departments for students, the Programming Department, the Computer Department, and the Chemical Laboratory Department
          </p>

          <a href="#" className="py-5 px-10 bg-[#372cfa] text-white font-semibold cursor-pointer border-none outline-none transition-all rounded-2xl hover:bg-[#070439]">Get Started</a>
        </section>

        <section className="max-md:-order-1 flex-1">
          <Image src='/hero.svg' width={1000} height={1000} priority={true} alt='student future schools egypt' />
        </section>
      </section>
    </header>
  )
}
