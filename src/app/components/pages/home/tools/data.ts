

export type Tool = {
  name: string
  id: string
}

export type GroupTool = {
  group: Tool[]
}

export const isTool = (tool: Tool | GroupTool): tool is Tool =>{
  return (tool as Tool).name !== undefined
}

export const isGroupTool = (tool: Tool | GroupTool): tool is GroupTool =>{
  return (tool as GroupTool).group !== undefined
}

export type ToolsData = Array<Tool | GroupTool>

export const toolsData: ToolsData = [
  {
    name: "SQL",
    id: "sql"
  },
  {
    group: [
      {
        name: "Tanstack Query",
        id: "tanstack_query"
      },
      {
        name: "Redux",
        id: "redux"
      },
      {
        name: "Vercel",
        id: "vercel"
      }
    ]
  },
  {
    group: [
      {
        name: "Git",
        id: "git"
      },
      {
        name: "Node.js",
        id: "node_js"
      },
      {
        name: "Ionic",
        id: "ionic"
      },
      {
        name: "Styled Components",
        id: "styled_components"
      }
    ]
  },
  {
    group: [
      {
        name: "Github",
        id: "github"
      },
      {
        name: "Next.js",
        id: "next_js"
      },
      {
        name: "Typescript",
        id: "typescript"
      },
      {
        name: "Javascript",
        id: "javascript"
      },
      {
        name: "HTML",
        id: "html"
      }
    ]
  },
  {
    group: [
      {
        name: "Tailwind",
        id: "tailwind"
      },
      {
        name: "MongoDB",
        id: "mongo_db"
      },
      {
        name: "React.js",
        id: "react_js"
      },
      {
        name: "CSS/SCSS",
        id: "css_scss"
      },
    ]
  },
  {
    group: [
      {
        name: "tRPC",
        id: "trpc"
      },
      {
        name: "Adobe XD",
        id: "adobe_xd"
      },
      {
        name: "Socket.io",
        id: "socket_io"
      },
    ]
  },
  {
    group: [
      {
        name: "Flutter",
        id: "flutter"
      }
    ]
  }
]