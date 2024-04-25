import { MainHeader } from "./components/layout/header/main"
import { HomeAbout } from "./components/pages/home/about"
import { HomeContact } from "./components/pages/home/contact"
import { HomeHero } from "./components/pages/home/hero"
import { HomeProjects } from "./components/pages/home/projects"
import { HomeTools } from "./components/pages/home/tools"


const Root = () =>{

  return (
    <>
      <MainHeader />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeTools />
        <HomeProjects />
        <HomeContact />
      </main>
    </>
  )
}


export default Root