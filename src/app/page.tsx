import { MainHeader } from "./components/layout/header/main"
import { HomeAbout } from "./components/pages/home/about"
import { HomeHero } from "./components/pages/home/hero"


const Root = () =>{

  return (
    <>
      <MainHeader />
      <main>
        <HomeHero />
        <HomeAbout />
      </main>
    </>
  )
}


export default Root