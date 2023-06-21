'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Header() {

  const switchMenu = useRef<HTMLUListElement>(null)
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? localStorage.setItem("theme", "light"))

  // window.addEventListener("DOMContentLoaded", function () {

  //   if (theme === "light") {
  //     document.documentElement.className = "light";
  //     document.documentElement.setAttribute("data-theme", "light");
  //   } else if (theme === "dark") {
  //     document.documentElement.className = "dark";
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   }

  // });

  const changeTheme = () => {
    localStorage.getItem('theme') === 'light' ? (document.documentElement.className = 'dark', document.documentElement.setAttribute('data-theme', 'dark'), localStorage.setItem('theme', 'dark')) : (document.documentElement.className = 'light', document.documentElement.setAttribute('data-theme', 'light'), localStorage.setItem('theme', 'light'))
  }

  const funcSwitchMenu = () => {
    // 👉️ TypeScript knows that ref is not null here
    switchMenu.current?.classList.toggle('!flex')
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

          <button className="btn-search" role="search" id="model-search">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="26" width="26" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </button>

          <button className="btn-theme" role="switch" id="switch-theme" aria-checked="true" onClick={changeTheme}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="dark:text-white" height="28" width="28">
              <circle cx="185.6708" cy="183.8122" r="65.625" />
              <path d="M185.6708,87.5622a13.1256,13.1256,0,0,0,13.125-13.125V52.5622a13.125,13.125,0,1,0-26.25,0v21.875A13.1257,13.1257,0,0,0,185.6708,87.5622Z" />
              <path d="M99.051,115.7519a13.1236,13.1236,0,1,0,18.56-18.56L102.1442,81.726a13.1236,13.1236,0,0,0-18.5595,18.56Z" />
              <path d="M89.4208,183.8122a13.1257,13.1257,0,0,0-13.125-13.125H54.4208a13.125,13.125,0,0,0,0,26.25h21.875A13.1256,13.1256,0,0,0,89.4208,183.8122Z" />
              <path d="M99.051,251.8725,83.5847,267.3431a13.1236,13.1236,0,1,0,18.56,18.56l15.4663-15.4706a13.1236,13.1236,0,1,0-18.5595-18.56Z" />
              <path d="M185.6708,280.0622a13.1258,13.1258,0,0,0-13.125,13.125v21.875a13.125,13.125,0,0,0,26.25,0v-21.875A13.1257,13.1257,0,0,0,185.6708,280.0622Z" />
              <path d="M272.2907,251.8725a13.1236,13.1236,0,1,0-18.56,18.56l15.4663,15.4706a13.1236,13.1236,0,1,0,18.56-18.56Z" />
              <path d="M330.0458,183.8122a13.1257,13.1257,0,0,0-13.125-13.125h-21.875a13.125,13.125,0,0,0,0,26.25h21.875A13.1256,13.1256,0,0,0,330.0458,183.8122Z" />
              <path d="M263.0109,119.5971a13.0824,13.0824,0,0,0,9.28-3.8452l15.4663-15.4663a13.1236,13.1236,0,1,0-18.56-18.56L253.7312,97.1923a13.125,13.125,0,0,0,9.28,22.4048Z" />
              <path d="M456.9379,401.6714a63.97,63.97,0,0,1-14.9963,7.2055c-19.6448,6.5283-41.8787,2.9566-58.1439-9.8523a68.9311,68.9311,0,0,1-10.835-10.8339c-12.8088-16.2663-16.3806-38.5-9.8523-58.1471a63.8444,63.8444,0,0,1,7.2077-14.9931,8.8036,8.8036,0,0,0-10.1172-13.3034,87.5188,87.5188,0,1,0,110.0372,110.04A8.8,8.8,0,0,0,456.9379,401.6714Z" />
            </svg>
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

        <Link className="btn-auth" id="link-login" href="/auth">
          <svg xmlns="http://www.w3.org/2000/svg" clipRule="evenodd" width="24" height="24" fill="none" id="user"><path fill="#fff" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z" /></svg>
          Login</Link>
        {/* Right Header */}
      </nav>
    </header >
  )
}
