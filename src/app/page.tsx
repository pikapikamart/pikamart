import { MainHeader } from "./components/layout/header/main"
import { HomeAbout } from "./components/pages/home/about"
import { HomeHero } from "./components/pages/home/hero"
import { HomeTools } from "./components/pages/home/tools"


const Root = () =>{

  return (
    <>
      <MainHeader />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeTools />
      </main>
    </>
  )
}


export default Root