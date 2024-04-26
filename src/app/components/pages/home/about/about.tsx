"use client"
import { customSwipeUpVariant } from "@/app/motion"
import { motion } from "framer-motion"
import { useRef } from "react"


const About = () =>{
  const scrollRef = useRef<HTMLDivElement>(null)
  
  return (
    <div className="px-[clamp(16px,4vw,64px)] pt-[clamp(32px,4vw,56px)] max-w-default lg:mb-10">
      <div className="relative pb-[clamp(242px,20vw,256px)]">
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={{once: true, amount: 1}}
          variants={customSwipeUpVariant("10%", .35)} 
          className="heading-default mb-[clamp(16px,1vw,24px)] text-dark-one"
          id="about">A bit of myself
        </motion.h2>
        <motion.p
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: .25 }} 
          variants={customSwipeUpVariant("10%", .45)}
          className="leading-main text-dark-one text-[clamp(16px,2vw,20px)] mb-6 max-w-[960px]">My name is Raymart Pamplona, a front-end/full stack developer that is based in Iba, Zambales, Philippines. Building web apps wasn't really my first choice, but after doing it for a long time I kinda get good and just continued doing it. And the best part of this is seeing yourself created something out of nothing, well not really from nothing but you get the point. So yeah, I've definitely found my passion in web development.</motion.p>
        <motion.p
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: .25 }} 
          variants={customSwipeUpVariant("10%", .45)}
          className="leading-main text-dark-one text-[clamp(16px,2vw,20px)] mb-6 max-w-[960px]">Thinking of an idea to build is the hardest part for me, thus most of my what I built is from the best platform/community that I know and belong to, <a className="text-blue-500" href="https://www.frontendmentor.io/" target="_blank">frontendmentor</a>. And still one of my greatest achievement is being the <a className="font-medium text-yellow-one" target="_blank" href="https://medium.com/frontend-mentor/2021-year-in-review-for-frontend-mentor-9226de88a6a9">2021 "Mentor of the Year"</a> from frontendmentor itself, can you believe it!!!</motion.p>
        <div className="lg:hidden">
          <img 
            className="absolute top-0 right-20"
            src="/about/badges/badge-1.svg" 
            alt=""
            aria-hidden="true" />
          <img 
            className="absolute right-2 top-20 opacity-40"
            src="/about/badges/badge-2.svg" 
            alt=""
            aria-hidden="true" />
          <img 
            className="absolute right-2 top-40 opacity-20"
            src="/about/badges/badge-4.svg" 
            alt=""
            aria-hidden="true" />
          <img 
            className="absolute right-2 bottom-40 opacity-10"
            src="/about/badges/badge-7.svg" 
            alt=""
            aria-hidden="true" />
          <img 
            className="absolute right-44 bottom-20 opacity-15"
            src="/about/badges/badge-8.svg" 
            alt=""
            aria-hidden="true" />
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: .5 }}
          ref={ scrollRef } 
          className="hidden lg:block">
          <motion.img 
            variants={ customSwipeUpVariant("5%", .25) }
            className="absolute top-0 right-44"
            src="/about/badges/badge-1.svg" 
            alt=""
            aria-hidden="true" />
          <motion.img 
            variants={ customSwipeUpVariant("5%", .25, .2) }
            className="absolute top-20 right-20"
            src="/about/badges/badge-2.svg" 
            alt=""
            aria-hidden="true" />
          <motion.img 
            variants={ customSwipeUpVariant("5%", .25, .3) }
            className="absolute top-40 right-2"
            src="/about/badges/badge-3.svg" 
            alt=""
            aria-hidden="true" />
          <motion.img 
            variants={ customSwipeUpVariant("5%", .25, .4) }
            className="absolute top-48 right-36"
            src="/about/badges/badge-4.svg" 
            alt=""
            aria-hidden="true" />
          <motion.img 
            variants={ customSwipeUpVariant("5%", .25, .5) }
            className="absolute top-64 right-4"
            src="/about/badges/badge-5.svg" 
            alt=""
            aria-hidden="true" />
          <motion.img 
            variants={ customSwipeUpVariant("5%", .25, .6) }
            className="absolute top-[420px] right-12"
            src="/about/badges/badge-6.svg" 
            alt=""
            aria-hidden="true" />
          <motion.img 
            variants={ customSwipeUpVariant("5%", .25, .7) }
            className="absolute top-[360px] right-60"
            src="/about/badges/badge-7.svg" 
            alt=""
            aria-hidden="true" />
          <motion.img 
            variants={ customSwipeUpVariant("5%", .25, .8) }
            className="absolute top-96 right-[450px]"
            src="/about/badges/badge-8.svg" 
            alt=""
            aria-hidden="true" />
        </motion.div>
      </div>
    </div>
  )
}


export default About