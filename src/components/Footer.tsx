import { twMerge } from "tailwind-merge"
import Link from "next/link";
import NextImage from "next/image";

export function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return <div className="mx-10">
    <div className="mx-auto mt-40 mb-14 flex max-w-screen-xl flex-col gap-24 h-[580px] text-primary md:h-64 md:flex-row lg:gap-52">
      <div className="flex flex-col gap-6">
        <a className="flex items-center font-extrabold uppercase tracking-wide text-ascent" href="/">
          {/*<Image src="/Logo.png" alt="Logo" width={50} height={50} />*/}
          Science For <span className="text-[#094067]">&nbsp;The Bay</span>
        </a>
        <div className="flex flex-col gap-1">
          <h1 className="font-light">© {year}. All Rights Reserved.</h1>
          <h1 className="font-light">Content by members of SFTB</h1>
          <h1 className="font-light">Developed by Lukas Somwong</h1>
          <h1 className="font-light">Code licensed under <a href="/LICENSE.txt" className="text-[var(--ascent-color)]">MIT</a></h1>
        </div>

        <div className="flex space-x-4">
          <a target="_blank" href=""><NextImage src="/instagram.png" alt="Instagram" width={32} height={32} className="invert" /></a>
          <a target="_blank" href=""><NextImage src="/discord.png" alt="Discord" width={32} height={32} className="invert" /></a>
          <a target="_blank" href="mailto:scienceforthebay@gmail.com"><NextImage src="/email.png" alt="Email" width={32} height={32} className="invert" /></a>
        </div>
      </div>
      <div className="flex xl:flex-row sm:flex-col flex-row gap-7 mt-3 [&>*]:font-medium [&>*]:h-min [&>*]:transition-colors [&>*]:duration-500">
        <div className="flex flex-col gap-7 sm:flex-row">
          <Link href="/" className="hover:text-[var(--ascent-color)]">Home</Link>
          <Link href="/dusd" className="hover:text-[var(--ascent-color)]">DUSD Program</Link>
          <Link href="/projects" className="hover:text-[var(--ascent-color)]">Other Projects</Link>
        </div>
        <div className="flex flex-col gap-7 sm:flex-row">
         <Link href="/team" className="hover:text-[var(--ascent-color)]">Our Team</Link>
         <Link href="/join" className="hover:text-[var(--ascent-color)]">Join us</Link>
        </div>
      </div>
    </div>
  </div>
}
