import { 
  motion,
  AnimatePresence } from "framer-motion"
import { useContactForm } from "./hook"


type FormProps = {
  exit: VoidFunction
}

const Form = ({ exit }: FormProps) =>{
  const { 
    register,
    handleSubmit,
    formErrors,
    isEmailSuccess } = useContactForm()

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
        className="text-dark-one"
        onSubmit={handleSubmit}>
        <h3 className="leading-[1] font-merriweather font-bold text-[clamp(24px,4vw,48px)] mb-[clamp(32px,5vw,48px)]">What can I help you with?</h3>
        <div className="mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="fullname" 
            className="block text-[clamp(14px,3vw,16px)]">Full name *
          </label>
          <input 
            { ...register("fullname") }
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none focus-within:font-medium" 
            type="text" 
            name="fullname" 
            id="fullname" 
            required />
          { !!formErrors.fullname?.message && <p className="text-red-600 text-[clamp(14px,3vw,16px)]">{ formErrors.fullname.message }</p> }
        </div>
        <div className="mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="email" 
            className="block text-[clamp(14px,3vw,16px)]">Email *
          </label>
          <input 
            { ...register("email") }
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none focus-within:font-medium" 
            type="email" 
            name="email" 
            id="email" 
            required />
          { !!formErrors.email?.message && <p className="text-red-600 text-[clamp(14px,3vw,16px)]">{ formErrors.email.message }</p> }
        </div>
        <div className="mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="subject" 
            className="block text-[clamp(14px,3vw,16px)]">Subject *
          </label>
          <input 
            { ...register("subject") }
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none focus-within:font-medium" 
            type="text" 
            name="subject" 
            id="subject" 
            required />
          { !!formErrors.subject?.message && <p className="text-red-600 text-[clamp(14px,3vw,16px)]">{ formErrors.subject.message }</p> }
        </div>
        <div className="mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="message" 
            className="block text-[clamp(14px,3vw,16px)]">Message *
          </label>
          <textarea 
            { ...register("message") }
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none focus-within:font-medium" 
            name="message" 
            rows={3}
            id="message" 
            required></textarea>
          { !!formErrors.message?.message && <p className="text-red-600 text-[clamp(14px,3vw,16px)]">{ formErrors.message.message }</p> }
        </div>
        <div>
          <input type="hidden" {...register("honeypot")} />
        </div>
        <motion.button
          className="mt-4 py-3 px-8 rounded-full bg-dark-one text-white font-semibold"
          type="submit" 
          whileHover={{
            y: "-5%"
          }}>Send message
        </motion.button>
      </form>
      <AnimatePresence>
        { isEmailSuccess && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%"
            }} 
            animate={{
              opacity: 1,
              x: "0%"
            }}
            exit={{
              opacity: 0,
              x: "100%"
            }} 
            className="rounded-lg rounded-r-none rounded-br-none bg-dark-one text-white py-4 px-8 fixed right-0 top-0">
            <p className="text-[clamp(14px,3vw,18px)]">Your email was sent. Thank you!!</p>
          </motion.div>
        ) }
      </AnimatePresence>
    </div>
  )
}


export default Form