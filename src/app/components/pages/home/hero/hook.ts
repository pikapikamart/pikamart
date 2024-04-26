import { 
  useEffect, 
  useState } from "react"


export const useHero = () => {
  const [ isButtonAnimated, setIsButtonAnimated ] = useState(false)
  const [ isButtonHidden, setIsButtonHidden ] = useState(false)
  const [ isMaximumHeightReached, setMaximumHeightReached ] = useState(false)

  useEffect(() =>{
    if ( isButtonHidden ) {
      setIsButtonHidden(false)
      setIsButtonAnimated(false)
    }
  }, [ isButtonHidden ])

  useEffect(() =>{
    const handleHeightResize = () =>{
      const scrollY = window.scrollY
      const fullHeight = document.body.offsetHeight

      if ( scrollY > fullHeight-1200 ) {
        setMaximumHeightReached(true)
      } else {
        setMaximumHeightReached(false)
      }
  
      if ( !isButtonHidden && scrollY > 380 ) {
        setIsButtonAnimated(true)
      }else if ( isButtonAnimated && scrollY <= 380 ) {
        setIsButtonHidden(true)
      }
    }

    window.addEventListener("scroll", handleHeightResize)
  }, [isButtonAnimated])

  return {
    isButtonHidden,
    isButtonAnimated,
    isMaximumHeightReached
  }
}