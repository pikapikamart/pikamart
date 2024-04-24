import { MainHeader } from "./components/layout/header/main"
import { HomeHero } from "./components/pages/home/hero"


const Root = () =>{

  return (
    <>
      <MainHeader />
      <main className="px-[clamp(16px,5vw,64px)]">
        <HomeHero />
      </main>
    </>
  )
}


export default Root