"use client"
import { useStickHeader } from "@/app/components/lib/hooks/useStickyHeader"
import Link from "next/link"


const Main = () =>{
  const { 
    hideHeaderSticky,
    showHeaderSticky } = useStickHeader()

  return (
    <header className={`flex items-center justify-between px-4 lg:px-16 h-[clamp(64px,9vw,80px)] max-w-default bg-white ${hideHeaderSticky? "animate-scrollOut scroll-in" : showHeaderSticky? "animate-scrollIn scroll-in" : ""}`}>
      <Link
        className="font-merriweather font-bold text-[clamp(24px,3vw,32px)]" 
        href="#">
        <span>R~</span>
      </Link>
      <nav className="text-dark-one">
        <ul className="flex items-center md:text-lg">
          <li className="mr-4">
            <Link href="#about">About</Link>
          </li>
          <li className="mr-4">
            <Link href="#tools">Tools</Link>
          </li>
          <li className="md:mr-4">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hidden text-lg md:block">
            <button className=" py-3 px-4 rounded-full bg-yellow-one text-dark-one">Get in Touch</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Main