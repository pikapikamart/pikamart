"use client"
import { 
  customSwipeUpVariant, 
  fadeVariant } from "@/app/motion"
import { 
  Tool, 
  isTool, 
  toolsData } from "./data"
import { motion } from "framer-motion"


const Tools = () =>{

  const renderMobileViewTools = () =>{
    const tools: Tool[] = []
    
    toolsData.forEach(tool => {
      if ( isTool(tool) ) {
        tools.push(tool)
      } else {
        tool.group.forEach(innerTool => {
          tools.push(innerTool)
        })
      }
    })

    return tools.map((tool, index) => (
      <motion.li
        key={ tool.id }
        initial="initial"
        variants={ fadeVariant() }
        whileInView="animate"
        viewport={{once: true}}
        className="w-full max-w-[clamp(80px,15vw,128px)] max-h-[64px,6vw,104px] flex flex-col items-center mb-[clamp(1rem,4vw,2rem)]" 
        custom={ index }>
        <img 
          className="max-w-[clamp(40px,8vw,64px)] max-h-[clamp(40px,8vw,64px)] mb-4"
          src={`/tools/${ tool.id }.svg`} 
          alt={ tool.name } />
        <p className="text-dark-one text-[clamp(12px,2vw,16px)] text-center leading-4 font-medium">{ tool.name }</p>
      </motion.li>
    ))
  }

  const renderDesktopViewTools = () =>{

    const odd = (length: number, index: number) =>{
      const half = Math.ceil(length/2)

      if ( index+1===half ) return 0
  
      if ( index < half ) {
        return 100 * (half-index-1)
      } else {
        return (100*(index+1-half))*-1
      }
    }

    const even = (length: number, index: number) =>{
      const half = Math.ceil(length/2)

      if ( index < half ) {
        return 50 * ((half+1)-(index*2))
      } else if (index>=half) {
        return (50*((index*2-half)-1))*-1
      }
    }

    const mappedTools = toolsData.map((tool, index) => (
      isTool(tool)? 
        <motion.li
          initial={{
            x: index===0? "300%" : "-300%",
            opacity: 0
          }}
          whileInView={{
            x: "0%",
            y: "0%",
            opacity: 1,
            transition: {
              duration: .75,
              delay: .05 * (index),
            }
          }}
          viewport={{
            once: true,
            amount: .75
          }}
          className="w-32 h-[104px] flex flex-col items-center" 
          key={ tool.id }>
          <img 
            className="max-w-[clamp(40px,8vw,64px)] max-h-[clamp(40px,8vw,64px)] mb-4"
            src={`/tools/${ tool.id }.svg`} 
            alt={ tool.name } />
          <p className="text-dark-one text-[clamp(12px,2vw,16px)] text-center leading-4 font-medium">{ tool.name }</p>
        </motion.li>
          : 
        <li key={`tool-group-${ index }`}>
          <ul className="flex flex-col gap-y-3">
            { tool.group.map((innerTool, innerIndex) => (
              <motion.li
                initial={{
                  x: `${ index<3? 100*(3-index) : ((100*(index-3)))*-1 }%`,
                  y: `${ index%2 ? odd(tool.group.length, innerIndex): even(tool.group.length, innerIndex)}%`,
                  opacity: 0
                }}
                whileInView={{
                  x: "0%",
                  y: "0%",
                  opacity: 1,
                  transition: {
                    delay: .05 * (index+innerIndex),
                    duration: .75
                  }
                }}
                viewport={{
                  once: true,
                  amount: .75
                }}
                className="w-32 h-[104px] flex flex-col items-center" 
                key={ innerTool.id }>
                <img 
                  className="max-w-[clamp(40px,8vw,64px)] max-h-[clamp(40px,8vw,64px)] mb-1"
                  src={`/tools/${ innerTool.id }.svg`} 
                  alt={ innerTool.name } />
                <p className="text-dark-one text-[clamp(12px,2vw,16px)] text-center leading-4 font-medium">{ innerTool.name }</p>
              </motion.li>
            )) }
          </ul>
        </li>
    ))

    return mappedTools
  }

  return (
    <div className="px-[clamp(16px,4vw,64px)] mb-[clamp(80px,15vw,128px)]">
      <div>
        <motion.h2 
          initial="initial"
          whileInView="animate"
          viewport={{once: true, amount: 1}}
          variants={customSwipeUpVariant("10%", .35)}
          className="heading-default mb-[clamp(16px,1vw,24px)] text-dark-one lg:text-center"
          id="tools">Tools that I use
        </motion.h2>
        <motion.p 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: .25 }} 
          variants={customSwipeUpVariant("10%", .35, .35)}
          className="leading-main text-dark-one text-[clamp(16px,2vw,20px)] mb-[clamp(24px,4vw,40px)] max-w-[800px] lg:text-center lg:mx-auto">With my trusted stacks in hand, I embark on the journey of web development, transforming ideas into digital realities one code at a time.</motion.p>
      </div>
      <div>
        <ul className="flex flex-wrap justify-between w-full lg:hidden">
          { renderMobileViewTools() }
        </ul>
        <motion.ul 
          viewport={{ once: true, amount: .5 }}
          className="hidden lg:flex lg:items-center lg:justify-center">
          { renderDesktopViewTools() }
        </motion.ul>
      </div>
    </div>
  )
}


export default Tools