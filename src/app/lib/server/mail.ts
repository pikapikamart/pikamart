"use server"
import nodemailer from "nodemailer"


type SendEmailProps = {
  from: string
  subject: string
  name: string
  body: string
}

export const sendEmail = async({ from, name, subject, body }: SendEmailProps) =>{
  const { 
    SMTP_PASSWORD,
    SMTP_EMAIL } = process.env

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD
    }
  })

  try { 
    const testResult = await transport.verify()
    console.log(testResult)
  } catch(error) {
    console.log(error)
  }

  try {
    const sendResult = await transport.sendMail({
      from,
      to: SMTP_EMAIL,
      subject,
      html: body
    })
    console.log(sendResult)
  } catch(error) {
    console.log(error)
  }
}