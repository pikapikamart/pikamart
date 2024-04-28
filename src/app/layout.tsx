import type { Metadata } from "next";
import "./globals.css";
import { 
  merriweather_sans_serif, 
  poppins_sans, 
  quicksand_sans } from "./utils/fonts";
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: "Raymart Pamplona",
  description: "Portfolio website of Raymart Pamplona",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>


const RootLayout = ({ children }: RootLayoutProps) =>{

  return (
    <html
      className="scroll-smooth" 
      lang="en">
      <body className={`${ quicksand_sans } ${ poppins_sans } ${ merriweather_sans_serif } font-quicksand`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}


export default RootLayout