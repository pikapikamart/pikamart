import { motion } from "framer-motion"


type FormProps = {
  exit: VoidFunction
}

const Form = ({ exit }: FormProps) =>{

  return (
    <div className="relative z-10 bg-white rounded-lg max-w-[768px] mx-auto py-[clamp(64px,10vw,96px)] px-[clamp(40px,10vw,96px)]">
      <button 
        onClick={ exit }
        className="absolute right-[clamp(40px,10vw,64px)] top-10 opacity-70">
        <span className="sr-only">close modal</span>
        <img 
          src="/icons/exit.svg" 
          alt="" />
      </button>
      <form 
        className="text-dark-one">
        <h3 className="leading-[1] font-merriweather font-bold text-[clamp(24px,4vw,48px)] mb-[clamp(32px,5vw,48px)]">What can I help you with?</h3>
        <div className=" focus-within:border-b-gray-800 border-b mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="fullname" 
            className="block text-[clamp(14px,3vw,16px)]">Full name *
          </label>
          <input 
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none " 
            type="text" 
            name="fullname" 
            id="fullname" 
            required />
        </div>
        <div className=" focus-within:border-b-gray-800 border-b mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="email" 
            className="block text-[clamp(14px,3vw,16px)]">Email *
          </label>
          <input 
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none " 
            type="email" 
            name="email" 
            id="email" 
            required />
        </div>
        <div className=" focus-within:border-b-gray-800 border-b mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="message" 
            className="block text-[clamp(14px,3vw,16px)]">Message *
          </label>
          <textarea 
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none " 
            name="message" 
            rows={4}
            id="message" 
            required></textarea>
        </div>
        <motion.button
          className="mt-4 py-3 px-8 rounded-full bg-dark-one text-white font-semibold"
          type="submit" 
          whileHover={{
            y: "-5%"
          }}>Send message
        </motion.button>
      </form>
    </div>
  )
}


export default Form