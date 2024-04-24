

const Hero = () => {

  return (
    <div className="pt-[clamp(96px,13vw,128px)] min-h-[calc(100vh-clamp(64px,9vw,80px))]">
      <div className="px-[clamp(16px,5vw,64px)]">
        <h1 className="font-bold mb-6 font-merriweather leading-[1] text-dark-one text-[clamp(56px,9vw,86px)] text-center flex flex-col items-center w-full tracking-[-4px] md:block">
          <span className="text-[32px] md:text-[clamp(56px,9vw,86px)] md:mr-4">Hi.</span>
          I'm Raymart
        </h1>
        <p className="max-w-[640px] mx-auto text-[clamp(18px,2vw,22px)] text-center leading-main mb-10">A self taught front-end web developer that also loves building full stack applications.</p>
        <button className="block uppercase text-white py-4 px-20 rounded-full bg-dark-one font-medium max-w-max mx-auto">Let's Talk</button>
      </div>
      <div>
        <img 
          src="/bg/hero.png" 
          alt=""
          aria-hidden="true" />
      </div>
    </div>
  )
}


export default Hero