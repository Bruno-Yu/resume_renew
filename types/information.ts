export type marquee = {
  hidden: boolean
  content: string
}

export type  menuItem = {
  menuTab: string
  title: string
  id: string
  link: string
  hidden: boolean
}

export type socialItem = {
  name: string
  icon: string
  link: string
}

// skill & experience
export type aboutItem = {
  name: string
  details: string[]
}

// works
export type workItem = {
    cover_img: string
    title:  string
    description:  string
    skills: string
    repo_url:  string
    page_url:  string
}

// selfContent description
export type  description = {
    name:string
    content: string
    about: string
    en_about: string
  }

// selfContent avatar
export type avatar = {
    pc:string
    mobile: string
  }

export interface selfcontent {
  cnName: string
  enName:string
  description:description 
  name: string
  career: string,
  avatar: avatar
}

export type dataType = menuItem | socialItem | aboutItem | workItem | description | avatar | selfcontent
