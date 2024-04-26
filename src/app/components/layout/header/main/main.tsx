"use client"
import { useStickyHeader } from "@/app/components/lib/hooks/useStickyHeader"
import Link from "next/link"
import { 
  motion,
  AnimatePresence } from "framer-motion"
import { mainData } from "./data"
import { useExpansion } from "@/app/lib/hooks/useExpansion"
import { ContactModal } from "@/app/components/modal/contact"


const Main = () =>{
  const { 
    hideHeaderSticky,
    showHeaderSticky } = useStickyHeader()
  const { 
    isExpanded,
    handleExpansion } = useExpansion()
    
  const renderNavlinks = () =>{
    const mappedLinks = mainData.map(data => (
      <motion.li
        key={`navlink-${ data.label }`}
        whileHover={{
          y: "-5%"
        }} 
        className="mr-4">
        <Link href={ data.link }>{ data.label }</Link>
      </motion.li>
    ))

    return mappedLinks
  }

  return (
    <header className={` bg-white ${hideHeaderSticky? "animate-scrollOut scroll-in" : showHeaderSticky? "animate-scrollIn scroll-in" : ""}`}>
      <div className="max-w-default flex items-center justify-between px-4 lg:px-16 h-[clamp(64px,9vw,80px)]">
        <Link
          className="font-merriweather font-bold text-[clamp(24px,3vw,32px)]" 
          href="#">
          <span>R~</span>
        </Link>
        <nav className="text-dark-one">
          <ul className="flex items-center md:text-lg">
            { renderNavlinks() }
            <li className="hidden text-lg md:block">
              <motion.button 
                onClick={ handleExpansion }
                whileHover={{
                  y: "-5%"
                }}
                className=" py-3 px-4 rounded-full bg-yellow-one text-dark-one"
                aria-expanded={ isExpanded }>Get in Touch
              </motion.button>
            </li>
          </ul>
        </nav>
        <AnimatePresence>
          { isExpanded && <ContactModal exit={handleExpansion} /> }
        </AnimatePresence>
      </div>
    </header>
  )
}


export default Main