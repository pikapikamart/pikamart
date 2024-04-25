import { 
  Tool, 
  isTool, 
  toolsData } from "./data"


const Tools = () =>{

  const renderMobileViewTools = () =>{
    const tools: Tool[] = []
    
    toolsData.forEach(tool => {
      if ( isTool(tool) ) {
        tools.push(tool)
      } else {
        tool.group.forEach(innerTool => {
          tools.push(innerTool)
        })
      }
    })

    return tools.map(tool => (
      <li
        className="w-full max-w-[clamp(80px,15vw,128px)] max-h-[64px,6vw,104px] flex flex-col items-center mb-[clamp(1rem,4vw,2rem)]" 
        key={ tool.id }>
        <img 
          className="max-w-[clamp(40px,8vw,64px)] max-h-[clamp(40px,8vw,64px)] mb-4"
          src={`/tools/${ tool.id }.svg`} 
          alt={ tool.name } />
        <p className="text-dark-one text-[clamp(12px,2vw,16px)] text-center leading-4 font-medium">{ tool.name }</p>
      </li>
    ))
  }

  const renderDesktopViewTools = () =>{
    const mappedTools = toolsData.map((tool, index) => (
      isTool(tool)? 
      <li
        className="w-32 h-[104px] flex flex-col items-center" 
        key={ tool.id }>
        <img 
          className="max-w-[clamp(40px,8vw,64px)] max-h-[clamp(40px,8vw,64px)] mb-4"
          src={`/tools/${ tool.id }.svg`} 
          alt={ tool.name } />
        <p className="text-dark-one text-[clamp(12px,2vw,16px)] text-center leading-4 font-medium">{ tool.name }</p>
      </li>
        : 
        <li
          className="flex flex-col gap-y-3" 
          key={`tool-group-${ index }`}>
          { tool.group.map(innerTool => (
            <li
              className="w-32 h-[104px] flex flex-col items-center" 
              key={ innerTool.id }>
              <img 
                className="max-w-[clamp(40px,8vw,64px)] max-h-[clamp(40px,8vw,64px)] mb-1"
                src={`/tools/${ innerTool.id }.svg`} 
                alt={ innerTool.name } />
              <p className="text-dark-one text-[clamp(12px,2vw,16px)] text-center leading-4 font-medium">{ innerTool.name }</p>
            </li>
          )) }
        </li>
    ))

    return mappedTools
  }

  return (
    <div className="px-[clamp(16px,5vw,64px)]">
      <h2 
        className="heading-default mb-[clamp(16px,1vw,24px)] text-dark-one lg:text-center"
        id="about">Tools that I use
      </h2>
      <p className="leading-main text-dark-one text-[clamp(16px,2.5vw,20px)] mb-6 max-w-[960px] lg:text-center lg:mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, iusto.</p>
      <div>
        <ul className="flex flex-wrap w-full lg:hidden">
          { renderMobileViewTools() }
        </ul>
        <ul className="hidden lg:flex lg:items-center lg:justify-center">
          { renderDesktopViewTools() }
        </ul>
      </div>
    </div>
  )
}


export default Tools