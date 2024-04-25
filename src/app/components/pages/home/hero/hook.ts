import { 
  useEffect, 
  useState } from "react"


export const useHero = () => {
  const [ isButtonAnimated, setIsButtonAnimated ] = useState(false)
  const [ isButtonHidden, setIsButtonHidden ] = useState(false)
  const [ windowHeight, setWindowHeight ] = useState(0)

  useEffect(() =>{
    if ( isButtonHidden ) {
      setIsButtonHidden(false)
      setIsButtonAnimated(false)
    }
  }, [ isButtonHidden ])

  useEffect(() =>{
    if ( !isButtonHidden && windowHeight > 380 ) {
      setIsButtonAnimated(true)
    }

    else if ( isButtonAnimated && windowHeight <= 380 ) {
      setIsButtonHidden(true)
    }
  }, [ windowHeight ])

  useEffect(() =>{
    const handleHeightResize = () =>{
      setWindowHeight(window.scrollY)
    }

    window.addEventListener("scroll", handleHeightResize)
  }, [])

  return {
    isButtonHidden,
    isButtonAnimated
  }
}