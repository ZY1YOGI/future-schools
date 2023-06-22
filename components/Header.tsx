'use client';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi'
import { BsBarChartSteps } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'

export default function Header() {

  const switchMenu = useRef<HTMLUListElement>(null)


  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem("theme") ?? localStorage.setItem("theme", "light")
    if (theme === "light") {
      document.documentElement.className = "light";
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme === "dark") {
      document.documentElement.className = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }



  const funcSwitchMenu = () => {
    switchMenu.current?.classList.toggle('!flex')
  }

  return (
    <header className="">
      <nav className="negative">
        {/* left Header */}
        <div className="flex items-center justify-center space-x-3 cursor-pointer">
          <Image src="/logo.png" alt="logo future schools" width={50} height={50} priority={true} />
          <h1 className="text-2xl font-bold dark:text-teal-50">Future</h1>
        </div>
        {/* left Header */}



        {/* Negative */}
        <ul className="nav-links" ref={switchMenu}>
          <Link className='nav-link' href="/" role="link">Home</Link>
          <Link className='nav-link' href="/" role="link">Profile</Link>
          <Link className='nav-link' href="/" role="link">Editor</Link>
          <Link className='nav-link' href="/" role="link">Services</Link>
          <li className="relative nav-link group" id="nav-link-categories">
            <button className="flex items-center">Rooms <BsBarChartSteps className='ml-1.5' /> </button>
            <ul role="menu" className="group-hover:block z-50 text-center absolute hidden w-40 whitespace-nowrap space-y-5 top-8 left-[50%] max-md:left-[12%] border-4 border-x-white border-y-primary rounded-xl py-3 px-1 bg-body-light dark:bg-body-dark">
              <li className=''>
                <Link className='nav-link min-w-full' href="/" role="link">@</Link>
              </li>
              <li>
                <Link className='nav-link' href="/" role="link">@</Link>
              </li>
              <li>
                <Link className='nav-link' href="/" role="link">@</Link>
              </li>
              <li>
                <Link className='nav-link' href="/" role="link">@</Link>
              </li>

            </ul>
          </li>

          <button className='btn-search' role="search" id="model-search">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="26" width="26" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </button>

          <button className='btn-theme' role="switch" id="switch-theme" aria-checked="true" onClick={() => localStorage.getItem('theme') === 'light' ? (document.documentElement.className = 'dark', document.documentElement.setAttribute('data-theme', 'dark'), localStorage.setItem('theme', 'dark')) : (document.documentElement.className = 'light', document.documentElement.setAttribute('data-theme', 'light'), localStorage.setItem('theme', 'light'))}>
            <MdDarkMode size={28} />
          </button>
        </ul>
        {/* Negative */}


        {/* Right Header */}
        <button className="hidden max-md:block" onClick={funcSwitchMenu} role="switch">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="dark:text-white" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
            </path>
          </svg>
        </button>

        <Link className='btn-auth' id="link-login" href="/auth">
          <BiUserCircle size={26} title='login user' />
          Login</Link>
        {/* Right Header */}
      </nav>

      <section className='container mx-auto flex max-md:flex-col md:items-center mt-12'>
        <section className="md:w-1/2 max-md:text-center flex-1">
          <h1 className="text-4xl mb-6 text-[#070439]">Future Private Schools We care about all the details of our students</h1>
          <p className="font-semibold mb-6 text-[#444444]">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
            without relying on meaningful content.
          </p>

          <a href="#" className="py-4 px-8 bg-[#372cfa] text-white font-semibold cursor-pointer border-none outline-none transition-all rounded-2xl hover:bg-[#070439]">Get Started</a>
        </section>

        <section className="max-md:-order-1 flex-1">
          <img src='/hero.svg' />
        </section>
      </section>
    </header >
  )
}
