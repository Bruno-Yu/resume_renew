export type marquee = {
  hidden: boolean
  content: string
  en_content: string
}

export type  menuItem = {
  menuTab: string
  en_menuTab?: string
  title?: string
  id?: string
  link: string
  hidden?: boolean
}

export type socialItem = {
  name: string
  icon: string
  link: string
}

// skill & experience
export type aboutItem = {
  name: string
  en_name: string
  details: string[]
  en_details: string[]
}

// works
export type workItem = {
    cover_img: string
    title:  string
    description:  string
    en_description:  string
    skills: string
    repo_url:  string
    page_url:  string
}

// selfContent description
export type  description = {
    name:string
    en_name:string 
    content: string
    en_content: string
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
