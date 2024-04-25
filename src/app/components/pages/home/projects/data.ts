import { title } from "process"


export type Project = {
  logo: string
  title: string
  description: string
  stacks: string[]
  color: "dark" | "white"
  background_color: string
  site?: string
  github?: string
} & (RowProject | ColumnProject)

export type RowProject = {
  type: "row"
  background_images: string[]
  reversed?: boolean
}

export type ColumnProject = {
  type: "column"
  background_image: string
}

export const isProjectRow = (project: Project): project is Project & RowProject =>{
  return project.type==="row"
}

export const isProjectColumn = (project: Project): project is Project & ColumnProject =>{
  return project.type==="column"
}


export const projectsData: Project[] = [
  {
    logo: "kanban.svg",
    title: "Kanban task management",
    description: "This project aims to develop a cutting-edge project management app with seamless board and task management, ensuring data accuracy with form validations. It will also include a sidebar toggle and light/dark mode switcher for optimal user experience.",
    stacks: [
      "Typescript", "Next.js", "tRPC", "Framer Motion", "Styled Components", "MongoDB", "React Tracked"
    ],
    site: "https://frontendmentor-kanban.vercel.app",
    github: "https://github.com/pikapikamart/frontendmentor-kanban",
    color: "white",
    type: "row",
    background_color: "#20212C",
    background_images: ["kanban_1.png", "kanban_2.png"]
  },
  {
    logo: "space_tourism.svg",
    title: "Space Tourism Website",
    description: "A website challenge from FrontendMentor. The main challenge of the website was  ensuring proper accessibility due to the varying contents for each route. The website  was properly built to pass accessibility tests, and took necessary measures to ensure  that the contents are properly accessible.",
    stacks: [
      "Typescript", "Next.js", "SCSS", "Framer Motion"
    ],
    site: "https://frontendmentor-space-tourism.vercel.app/",
    github: "https://github.com/pikapikamart/frontendmentor-space-tourism",
    color: "white",
    type: "column",
    background_color: "#0D1B38",
    background_image: "space_tourism_bg.png"
  },
  {
    logo: "coffeeroasters.svg",
    title: "Coffeeroasters Subscription Site",
    description: "A website challenge on FrontendMentor that allows users to order and customize coffee without any real payment functionality. Animations are added to make the application more exciting and appropriate tags and methods are used for a better accessibility. Overall, the web application was executed well.",
    stacks: [
      "Typescript", "Next.js", "SCSS", "Framer Motion", "Styled Components"
    ],
    site: "https://frontendmentor-cofferoaster-subscription.vercel.app/",
    github: "https://github.com/pikapikamart/frontendmentor-cofferoaster-subscription",
    color: "dark",
    type: "column",
    background_color: "#E5CAAB",
    background_image: "coffeeroasters_bg.png"
  },
  {
    logo: "tictactoe.svg",
    title: "Frontendmentor Tic Tac Toe",
    description: "This challenge is adopted from the classic tic tac toe game that we all played before. This particular challenge gives you a design plus some mode for you to play. It includes playing a cpu or you can play it with locally with 2 players. On this one, I added realtime functionality so you can play with others done with sockets.",
    stacks: [
      "Typescript", "Next.js", "Framer Motion", "Styled Components", "Socket.io", "React Tracked"
    ],
    site: "https://frontendmentor-tictactoe.vercel.app/",
    github: "https://github.com/pikapikamart/frontendmentor-tictactoe",
    color: "white",
    type: "column",
    background_color: "#495A63",
    background_image: "tictactoe_bg.png"
  },
  {
    logo: "bean_cafe.svg",
    title: "Bean Cafe",
    description: "Bean Cafe is the website for ordering products from 21st Bean Cafe itself. The ordering itself is only limited to sandbox as the payment provider's information was not updated. This was a freelance project, developed all the functionality from buyers to the seller and admin side. Design is from client.",
    stacks: [
      "Typescript", "Next.js", "Redux", "Framer Motion", "tRPC", "MongoDB", "NextAuth", "Styled Components", "React Tracked"
    ],
    color: "white",
    site: "https://21stbean.vercel.app/",
    type: "column",
    background_color: "#03070E",
    background_image: "bean_cafe_bg.png"
  },
  {
    logo: "tbgp.svg",
    title: "TBGP Publication Web App",
    description: "This serves as the primary website for the PRMSU university's main journalism publication. The application features a dedicated CMS platform that provides real-time collaboration among the writers.",
    stacks: [
      "Typescript", "Next.js", "tRPC", "Framer Motion", "Styled Components", "MongoDB", "React Tracked", "Redux", "Socket.io"
    ],
    site: "http://tbgpublications.vercel.app",
    github: "https://github.com/pikapikamart/tbgp",
    color: "dark",
    type: "row",
    reversed: true,
    background_color: "#E4E4E4",
    background_images: ["tbgp_1.png", "tbgp_2.png"]
  },
]