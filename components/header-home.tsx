'use client';

import Image from 'next/image';
import { Ref, useRef } from 'react';
import Link from 'next/link';

export default function header() {


  const switchMenu = useRef<Ref>(null)

  const funcSwitchMenu = () => {
    switchMenu.current.classList.toggle('!flex')
  }

  return (
    <header className="h-screen shadow-md">
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
            <button className="flex items-center">Rooms <svg className="ml-1" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.16667 11.5H10.8333V9.66667H7.16667V11.5ZM0.75 0.5V2.33333H17.25V0.5H0.75ZM3.5 6.91667H14.5V5.08333H3.5V6.91667Z" fill="black" /></svg></button>
            <ul role="menu" className="group-hover:block z-50 text-center absolute hidden w-40 whitespace-nowrap space-y-5 top-8 left-[50%] max-md:left-[12%] border-4 border-x-white border-y-blue-600 rounded-xl py-3 px-1 bg-body-light dark:bg-body-dark">
              <li>
                <Link className='nav-link' href="/" role="link">@</Link>
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

        </ul>
        {/* Negative */}


        {/* Right Header */}
        <button className="hidden max-md:block" onClick={funcSwitchMenu} role="switch">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="dark:text-white" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
            </path>
          </svg>
        </button>

        <Link className="btn-auth" id="link-login" href="/auth">
          <svg xmlns="http://www.w3.org/2000/svg" clipRule="evenodd" width="24" height="24" fill="none" id="user"><path fill="#fff" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z" /></svg>
          Login</Link>
        {/* Right Header */}
      </nav>
    </header >
  )
}
