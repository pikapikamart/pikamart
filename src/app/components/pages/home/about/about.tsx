

const About = () =>{

  return (
    <div className="px-[clamp(16px,5vw,64px)] pt-[clamp(32px,4vw,56px)] max-w-default">
      <div className="relative pb-[clamp(242px,20vw,256px)]">
        <h2 
          className="heading-default mb-[clamp(16px,1vw,24px)] text-dark-one"
          id="about">About me
        </h2>
        <p className="leading-main text-dark-one text-[clamp(16px,2vw,20px)] mb-6 max-w-[960px]">My name is Raymart Pamplona, a front-end/full stack developer that is based in Iba, Zambales, Philippines. Building web apps wasn't really my first choice, but after doing it for a long time I kinda get good and just continued doing it. And the best part of this is seeing yourself created something out of nothing, well not really from nothing but you get the point. So yeah, I've definitely found my passion in web development.</p>
        <p className="leading-main text-dark-one text-[clamp(16px,2vw,20px)] mb-6 max-w-[960px]">Thinking of an idea to build is the hardest part for me, thus most of my what I built is from the best platform/community that I know and belong to, <a className="text-blue-500" href="https://www.frontendmentor.io/" target="_blank">frontendmentor</a>. And still one of my greatest achievement is being the <a className="font-medium text-yellow-one" target="_blank" href="https://medium.com/frontend-mentor/2021-year-in-review-for-frontend-mentor-9226de88a6a9">2021 "Mentor of the Year"</a> from frontendmentor itself, can you believe it!!!</p>
        {/* mobile */}
        <div className="lg:hidden">
          <img 
            className="absolute top-0 right-20"
            src="/about/badges/badge-1.svg" 
            alt="" />
          <img 
            className="absolute right-2 top-20 opacity-40"
            src="/about/badges/badge-2.svg" 
            alt="" />
          <img 
            className="absolute right-2 top-40 opacity-20"
            src="/about/badges/badge-4.svg" 
            alt="" />
          <img 
            className="absolute right-2 bottom-40 opacity-10"
            src="/about/badges/badge-7.svg" 
            alt="" />
          <img 
            className="absolute right-44 bottom-20 opacity-15"
            src="/about/badges/badge-8.svg" 
            alt="" />
        </div>
        <div className="hidden lg:block">
          <img 
            className="absolute top-0 right-44"
            src="/about/badges/badge-1.svg" 
            alt="" />
          <img 
            className="absolute top-20 right-20"
            src="/about/badges/badge-2.svg" 
            alt="" />
          <img 
            className="absolute top-40 right-2"
            src="/about/badges/badge-3.svg" 
            alt="" />
          <img 
            className="absolute top-48 right-36"
            src="/about/badges/badge-4.svg" 
            alt="" />
          <img 
            className="absolute top-64 right-4"
            src="/about/badges/badge-5.svg" 
            alt="" />
          <img 
            className="absolute top-[420px] right-12"
            src="/about/badges/badge-6.svg" 
            alt="" />
          <img 
            className="absolute top-[360px] right-60"
            src="/about/badges/badge-7.svg" 
            alt="" />
          <img 
            className="absolute top-96 right-[450px]"
            src="/about/badges/badge-8.svg" 
            alt="" />
        </div>
      </div>
    </div>
  )
}


export default About