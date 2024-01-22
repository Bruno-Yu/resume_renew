export type  menuItem = {
  title: string
  link: string
}

// common
export const socialMedia = [
  {
    name: 'Github',
    icon: '',
    link: 'https://github.com/Bruno-Yu',
  },
  {
    name: 'CakeResume',
    icon: '',
    link: 'https://www.cakeresume.com/s--3QltBjc_WfUv2lo-j1NZmg--/jackhellowin',
  },
]

// menu
export const menuContent:  menuItem[] = [
  {
    title: '關於',
    link: '#about'
  },
  {
    title: '作品',
    link: '#works'
  },
  {
    title: '聯繫',
    link: '#contact'
  }
]

// banner
export const bannerContent = {
  cnName: '余俊毅',
  enName: 'Chin-Yi\u0020YU',
  description: {
    name:'我是布魯諾，' ,
    content: '現在是名前端工程師' ,
  },
  name: 'Bruno\u0020YU',
  career: 'Front-end\u0020Developer',
  avatar: {
    pc: 'src/assets/images/avatar.webp',
    mobile: 'src/assets/images/avatar.webp',
  }
}