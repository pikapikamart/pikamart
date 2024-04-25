import { MainHeader } from "./components/layout/header/main"
import { HomeAbout } from "./components/pages/home/about"
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
      </main>
    </>
  )
}


export default Root