"use client"
import { motion } from "framer-motion"
import { useHero } from "./hook"


const Hero = () => {
  const { isButtonAnimated } = useHero()

  return (
    <div className="pt-[clamp(96px,13vw,128px)] min-h-[calc(100vh-clamp(64px,9vw,80px))]">
      <div className="px-[clamp(16px,4vw,64px)]">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            transition: {
              duration: .75
            } 
          }}
          className="font-bold mb-6 font-merriweather leading-[1] text-dark-one text-[clamp(56px,9vw,86px)] text-center flex flex-col items-center w-full tracking-[-4px] md:block">
          <span className="text-[32px] md:text-[clamp(56px,9vw,86px)] md:mr-4">Hi.</span>
          I'm Raymart
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            transition: {
              duration: .75,
              delay: .25
            } 
          }}
          className="max-w-[640px] mx-auto text-[clamp(18px,2vw,22px)] text-center leading-main mb-10">
            A self taught front-end web developer that also loves building full stack applications.
        </motion.p>
          <div className="relative pt-20">
            <div className="absolute top-0 left-0 w-full h-screen">
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: .75,
                    delay: .5
                  }
                }}
                className={`whitespace-nowrap block non-floating uppercase text-base text-white py-4 px-20 rounded-full bg-dark-one font-medium ${ isButtonAnimated && "floating" }`}>
                <span className="transition-all">Let's Talk</span>
                <img 
                  className={`transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 w-0 ${ isButtonAnimated && "!opacity-100 w-[clamp(28px,4vw,36px)]" }`}
                  src="/icons/message.svg" 
                  alt=""
                  aria-hidden="true" />
              </motion.button>
            </div>
          </div>
      </div>
      <div>
        <img 
          className="w-full"
          src="/bg/hero.png" 
          alt=""
          aria-hidden="true" />
      </div>
    </div>
  )
}


export default Hero