import FocusTrap from "focus-trap-react"
import { createPortal } from "react-dom"
import { useBaseModalFocus } from "../../lib/hooks/useModalFocus"
import { ContactForm } from "./form"
import { motion } from "framer-motion"


type ModalProps = {
  exit: () => void,
  focusBackRef?: HTMLElement | null
}

const Contact = ({
  exit,
  focusBackRef }: ModalProps) => {
  const { modalRef } = useBaseModalFocus( focusBackRef )

  const exitModal = () =>{
    focusBackRef?.focus()
    exit()
  }

  return createPortal(
    <FocusTrap>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={ modalRef }
        role="dialog"
        key="contactModal"
        aria-labelledby="modal-heading" 
        className=" inset-0 fixed outline-none overflow-x-hidden overflow-y-scroll z-[99999999]">
        <div
          role="document" 
          className="max-w-full pt-24 px-4 pb-16">
          <div
            onClick={ exitModal } 
            className="bg-[#00000050] inset-0 fixed"/>
          <ContactForm exit={ exitModal } />
        </div>
      </motion.div>
    </FocusTrap>,
    document.body
  )
}


export default Contact