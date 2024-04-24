import { 
  Merriweather, 
  Poppins, 
  Quicksand } from "next/font/google";


export const quicksand_init = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand_sans",
  weight: ["400", "500", "600", "700"]
})

export const poppins_init = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins_sans",
  weight: ["400", "500", "600", "700"]
})

export const merriweather_init = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather_sans_serif",
  weight: ["300", "400", "700"]
})

export const quicksand_sans = quicksand_init.variable
export const poppins_sans = poppins_init.variable
export const merriweather_sans_serif = merriweather_init.variable