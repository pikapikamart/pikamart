

const Contact = () =>{

  return (
    <div className="max-w-default min-h-[calc(100vh-clamp(64px,9vw,80px))] px-[clamp(16px,4vw,64px)]">
      <div className=" mb-[clamp(64px,10vw,96px)]">
        <h2 
          className="heading-default mb-[clamp(16px,1vw,24px)] text-dark-one text-center"
          id="about">Contact me
        </h2>
        <p className="text-center leading-main text-dark-one text-[clamp(16px,2vw,20px)] mb-[clamp(24px,4vw,48px)] max-w-[960px] lg:text-center lg:mx-auto">Feel free to reach out! Drop me a message and let's start a conversation.</p>
        <button className="block uppercase text-dark-one py-4 px-20 rounded-full bg-yellow-one font-medium max-w-max mx-auto">Let's Talk</button>
      </div>
      <ul className="flex justify-center w-full gap-x-4 lg:gap-x-8">
        <li>
          <a href="https://www.linkedin.com/in/raymart-pamplona-190784269/" target="_blank">
            <span className="sr-only">linkedin</span>
            <img 
              className="shadow-lg rounded-full scale-75 lg:scale-100"
              src="/icons/social/linkedin.svg" 
              alt=""
              aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.frontendmentor.io/profile/pikapikamart" target="_blank">
            <span className="sr-only">frontendmentor</span>
            <img 
              className="shadow-lg rounded-full scale-75 lg:scale-100"
              src="/icons/social/frontendmentor.svg" 
              alt=""
              aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://github.com/pikapikamart" target="_blank">
            <span className="sr-only">github</span>
            <img 
              className="shadow-lg rounded-full scale-75 lg:scale-100"
              src="/icons/social/github.svg" 
              alt=""
              aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  )
}


export default Contact