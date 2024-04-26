import { sendEmail } from "@/app/lib/server/mail"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { 
  SubmitHandler, 
  useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
  fullname: z
    .string()
    .min(8, "Please enter full name"),
  email: z
    .string()
    .email("Please enter a valid email"),
  subject: z
    .string()
    .min(8, "Please enter a proper subject"),
  message: z
    .string()
    .min(8, "Please enter a proper message"),
  honeypot: z.string()
})

type FormSchema = z.TypeOf<typeof formSchema>

export const useContactForm = () =>{
  const { 
    register,
    handleSubmit,
    reset,
    formState: {
      errors: formErrors
    } } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })
  const [ isEmailSuccess, setIsEmailSuccess ] = useState(false)

  const submitHandler: SubmitHandler<FormSchema> = async(data) =>{
    if ( !!data.honeypot || isEmailSuccess ) return

    await sendEmail({
      from: data.email,
      subject: data.subject,
      name: data.fullname,
      body: `
      <div>
        <div style="margin-bottom: 1rem;">
          <h3>Email</h3>
          <p>${ data.email }</p>
        </div>
        <div>
          <h3>Message</h3>
          <p>${ data.message }</p>
        </div>
      </div>
      `
    })

    setIsEmailSuccess(true)
    reset()
  }

  useEffect(() =>{
    if ( isEmailSuccess ) {
      const timeout = setTimeout(() =>{
        setIsEmailSuccess(false)
      }, 5000)

      return () => { clearTimeout(timeout) }
    }
  }, [ isEmailSuccess ])

  return {
    handleSubmit: handleSubmit(submitHandler),
    register,
    formErrors,
    isEmailSuccess
  }
}