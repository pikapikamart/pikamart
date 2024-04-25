import { isProjectColumn, isProjectRow, projectsData } from "./data"


const Projects = () =>{

  const renderProjects = () =>{

    const buildProjectClass = (index: number) =>{
      if ( index===0 || isLastIndex(index) ) return "basis-full"

      if ( index%2 && index < 3 ) return "basis-[52.5%]"
      else if ( index%2 && index > 2 ) return "basis-[46.5%]"
      else if ( index%2===0 && index < 3 ) return "basis-[46.5%]"
      else if ( index%2===0 && index > 2 ) return "basis-[52.5%]"
    }

    const isLastIndex = (index: number) => index===projectsData.length-1

    const mappedProjects = projectsData.map((project, index) => (
      <li
        className={`rounded-lg py-[clamp(24px,3.5vw,40px)] px-[clamp(16px,3vw,24px)] mb-4 lg:pr-6} ${ buildProjectClass(index) } ${ index!==0 && !isLastIndex(index) && "lg:min-h-[672px]" } relative`}
        style={{  backgroundColor: project.background_color }} 
        key={`project-${ project.title }`}>
        <div className={`${ isProjectRow(project) && "lg:max-w-[clamp(520px,41vw,656px)]" } ${ isProjectRow(project) && isLastIndex(index) && "ms-auto" } relative z-10`}>
          <img 
            className={`max-h-[clamp(16px,2vw,26px)] mb-4 ${ isLastIndex(index) && "lg:ms-auto" }`}
            src={`/projects/${ project.logo }`} 
            alt={`${ project.title }`} />
          <h3 className={`font-poppins font-bold text-[clamp(32px,6vw,56px)] leading-[1.25] mb-4 ${ project.color==="white"? "text-white" : "text-dark-one" } ${ isProjectRow(project) && isLastIndex(index) && "lg:text-right" }`}>{ project.title }</h3>
          <p className={`text-[clamp(14px,1.5vw,16px)] leading-main mb-6 ${ project.color==="white"? "text-white" : "text-dark-one" } ${ isProjectRow(project) && isLastIndex(index) && "lg:text-right" }` }>{ project.description }</p>
          <ul className={`flex flex-wrap w-full gap-2 ${ (!!project.site || !!project.github) && "mb-6" } ${ isProjectRow(project) && isLastIndex(index) && "lg:justify-end" }`}>
            { project.stacks.map(stack => (
              <li
                className={`text-[clamp(12px,2vw,14px)] py-[6px] px-2 rounded border-[.5px] ${ project.color==="white"? "text-white border-white" : "text-dark-one border-dark-one" }`}
                key={`${ project.title }-${ stack }`}>
                { stack }
              </li>
            )) }
          </ul>
          <div className={`flex ${ isProjectRow(project) && isLastIndex(index) && "lg:justify-end" }`}>
            { !!project.site && (
              <a
                className="mr-4" 
                href={project.site}
                target="_blank">
                <span className="sr-only">visit live site</span>
                <img 
                  src={project.color==="white"? "/icons/web.svg" : "/icons/web_dark.svg" }
                  alt=""
                  aria-hidden="true" />
              </a>
            ) }
            { !!project.github && (
              <a
                className="mr-4" 
                href={project.github}
                target="_blank">
                <span className="sr-only">visit github repository</span>
                <img 
                  src={project.color==="white"? "/icons/github.svg" : "/icons/github_dark.svg" }
                  alt=""
                  aria-hidden="true" />
              </a>
            ) }
          </div>
        </div>
        { isProjectColumn(project) && (
          <img 
            className="absolute bottom-0 left-0 hidden lg:block"
            src={`/projects/${ project.background_image }`} 
            alt=""
            aria-hidden />
        ) }
        { isProjectRow(project) && (
          <div className="hidden lg:block">
            <img 
              className={`absolute top-6 ${ index===0 && "right-[clamp(56px,6vw,80px)]" } ${ isLastIndex(index) && "left-[clamp(56px,6vw,80px)]" } `}
              src={`/projects/${ project.background_images[0] }`} 
              alt=""
              aria-hidden />
            <img 
              className={`absolute bottom-6 ${ index===0 && "right-6" } ${ isLastIndex(index) && "left-6" }`}
              src={`/projects/${ project.background_images[1] }`} 
              alt=""
              aria-hidden />
          </div>
        ) }
      </li>
    ))

    return mappedProjects
  }

  return (
    <div className="px-[clamp(16px,4vw,64px)] max-w-default !mb-[clamp(80px,15vw,128px)]">
      <div className="lg:flex lg:justify-between lg:items-center mb-[clamp(48px,7vw,96px)]">
        <h2 
          className="heading-default mb-[clamp(16px,1vw,24px)] text-dark-one leading-[1] lg:mb-0 lg:max-w-[640px]"
          id="projects">Some of my past projects
        </h2>
        <p className="leading-main text-dark-one text-[clamp(16px,2vw,20px)] lg:text-right lg:max-w-[640px]">Here's a peek of some cool stuffs that I made before. These projects reflect my journey in of being a web developer.</p>
      </div>
      <ul className="lg:flex lg:w-full lg:flex-wrap lg:justify-between">
        { renderProjects() }
      </ul>
    </div>
  )
}


export default Projects