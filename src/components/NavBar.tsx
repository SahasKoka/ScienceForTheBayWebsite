"use client"

import Link from "next/link";

import Hamburger from 'hamburger-react'
import {useEffect, useState} from "react";
import {useParams, usePathname, useRouter} from "next/navigation";

export function NavBar() {
  const pathname = usePathname()
  const params = useParams()

  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [mobileTeamsExpanded, setMobileTeamsExpanded] = useState(false)
  const [mobileTimelinesExpanded, setMobileTimelinesExpanded] = useState(false)

  useEffect(() => {
    setHamburgerOpen(false)
    setMobileTeamsExpanded(false)
    setMobileTimelinesExpanded(false)
  }, [pathname, params])

  return <div className="z-20 sticky top-0 left-0">
    <div className="flex items-center justify-center h-20 shadow-lg bg-[var(--primary-background-color)] w-full pr-4">
      <div className="sm:mr-4 mr-2 ml-8 flex w-full max-w-screen-xl 2xl:mx-4 z-10">
        <Link className="flex items-center gap-2 text-sm font-extrabold tracking-wide sm:text-lg" href="/">
          {/*<Image src="/Logo.png" alt="Logo" width={50} height={50} className="hidden sm:block" />*/}
          {/*<Image src="/Logo.png" alt="Logo" width={30} height={30} className="block sm:hidden" />*/}
          <span className="text-ascent sm:text-xl text-lg tracking-wider uppercase">Science For <span className="text-[#094067]">The Bay</span></span>
        </Link>
        <div className="ml-auto text-primary lg:hidden">
          <Hamburger toggled={hamburgerOpen} toggle={setHamburgerOpen} direction="left" size={28} />
        </div>
        <div  className="hidden justify-center items-center space-x-8 lg:flex ml-auto sm:text-lg text-sm [&>*]:font-medium [&>*]:h-min [&>*]:transition-colors [&>*]:duration-500">
          <Link href="/" className="hover:text-[var(--ascent-color)]">Home</Link>
          <Link href="/projects" className="hover:text-[var(--ascent-color)]">Projects</Link>
          <Link href="/dusd" className="hover:text-[var(--ascent-color)]">DUSD Program</Link>
          <Link href="/team" className="hover:text-[var(--ascent-color)]">Our Team</Link>
          <Link href="/join" className="hover:text-[var(--ascent-color)]">Join us</Link>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-500 ${hamburgerOpen ? "top-20" : "-top-[500px]"} absolute w-full pb-5 pl-5 sm:text-xl text-lg font-medium bg-[var(--primary-background-color)] text-primary left-0 right-0 -z-10`}>
        <div className="flex flex-col gap-3 p-4">
          <Link href="/" className="flex items-center space-x-2 hover:text-[var(--ascent-color)]">
            <span>Home</span>
          </Link>
          <Link href="/projects" className="flex items-center space-x-2 hover:text-[var(--ascent-color)]">
            <span>Projects</span>
          </Link>
          <Link href="/dusd" className="flex items-center space-x-2 hover:text-[var(--ascent-color)]">
            <span>DUSD Program</span>
          </Link>
          <Link href="/team" className="flex items-center space-x-2 hover:text-[var(--ascent-color)]">
            <span>Our Team</span>
          </Link>
          <Link href="/join" className="flex items-center space-x-2 hover:text-[var(--ascent-color)]">
            <span>Join Us</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
}
