import { 
  useEffect, 
  useState } from "react";


export const useStickHeader = () => {
  const [ showHeaderSticky, setShowHeaderSticky ] = useState(false);
  const [ hideHeaderSticky, setHideHeaderSticky ] = useState(false);
  const [ windowHeight, setWindowHeight ] = useState(0);

  useEffect(() =>{
    if ( hideHeaderSticky ) {
      const stickyTimeout = setTimeout(() => {
        setHideHeaderSticky(false);
        setShowHeaderSticky(false);
      }, 500);

      return () => clearTimeout(stickyTimeout);
    }
  }, [ hideHeaderSticky ]);

  useEffect(() =>{
    if ( !hideHeaderSticky && windowHeight > 650 ) {
      setShowHeaderSticky(true);
    }

    else if ( showHeaderSticky && windowHeight <= 650 ) {
      setHideHeaderSticky(true);
    }
  }, [ windowHeight ]);

  useEffect(() =>{
    const handleHeightResize = () =>{
      setWindowHeight(window.scrollY);
    }

    window.addEventListener("scroll", handleHeightResize);
  }, [])

  return {
    hideHeaderSticky,
    showHeaderSticky
  }
}