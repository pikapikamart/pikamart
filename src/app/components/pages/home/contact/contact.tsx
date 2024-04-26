"use client"
import { 
  customSwipeUpVariant, 
  fadeVariant } from "@/app/motion"
import { 
  motion,
  AnimatePresence } from "framer-motion"
import { contactData } from "./data"
import { useExpansion } from "@/app/lib/hooks/useExpansion"
import { ContactModal } from "@/app/components/modal/contact"


const Contact = () =>{
  const { 
    isExpanded,
    handleExpansion } = useExpansion()

  const renderSocialLinks = () =>{
    const mappedLinks = contactData.map((data, index) => (
      <motion.li
        key={`contact-${ data.label }`}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={ fadeVariant() }
        custom={ index+7 }
        whileHover={{
          y: "-5%",
        }}>
        <a href={ data.link } target="_blank">
          <span className="sr-only">{ data.label }</span>
          <img 
            className="shadow-lg rounded-full scale-75 lg:scale-100"
            src={`/icons/social/${ data.image }`} 
            alt=""
            aria-hidden="true" />
        </a>
      </motion.li>
    ))

    return mappedLinks
  }

  return (
    <div className="max-w-default min-h-[calc(100vh-clamp(64px,9vw,80px))] px-[clamp(16px,4vw,64px)]">
      <div className=" mb-[clamp(64px,10vw,96px)]">
        <motion.h2 
          initial="initial"
          whileInView="animate"
          variants={ customSwipeUpVariant("10%", .45) }
          viewport={{ once: true, amount: 1 }}
          className="heading-default mb-[clamp(16px,1vw,24px)] text-dark-one text-center"
          id="about">Contact me
        </motion.h2>
        <motion.p 
          initial="initial"
          whileInView="animate"
          variants={ customSwipeUpVariant("10%", .45, .1) }
          viewport={{ once: true, amount: 1 }}
          className="text-center leading-main text-dark-one text-[clamp(16px,2vw,20px)] mb-[clamp(24px,4vw,48px)] max-w-[960px] lg:text-center lg:mx-auto">
          Feel free to reach out! Drop me a message and let's start a conversation.
        </motion.p>
        <motion.button 
          onClick={ handleExpansion }
          aria-expanded={ isExpanded }
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: .75,
              delay: .5
            }
          }}
          viewport={{ once: true, amount: 1 }}
          whileHover={{
            padding: "16px 64px"
          }}
          className="block uppercase text-dark-one py-4 px-20 rounded-full bg-yellow-one font-medium max-w-max mx-auto">
          Let's Talk
        </motion.button>
      </div>
      <ul className="flex justify-center w-full gap-x-4 lg:gap-x-8">
        { renderSocialLinks() }
      </ul>
      <AnimatePresence>
        { isExpanded && <ContactModal exit={handleExpansion} /> }
      </AnimatePresence>
    </div>
  )
}


export default Contact