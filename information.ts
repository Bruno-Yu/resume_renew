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

// works 

export const works = [
  {
    cover_img: 'src/assets/images/work01.webp',
    title: 'NFT GEL',
    description: '販售 NFT 網站的仿做，嘗試刻劃的練習作品',
    skills: 'ejs,gulp,Bootstrap5',
    repo_url: 'https://github.com/Bruno-Yu/NFT_GEL.git',
    page_url: 'https://bruno-yu.github.io/NFT_GEL/',
  },
  {
    cover_img: 'src/assets/images/work02.webp',
    title: 'GrandMaSam\nDiner',
    description: '山姆大嬸餐館，獨樹一格的菜餚與經營方式，一定讓體驗過的您難以忘懷',
    skills: 'Vue3,Vue_cli,Bootstrap5',
    repo_url: 'https://github.com/Bruno-Yu/GrandMaSam_Diner.git',
    page_url: 'https://bruno-yu.github.io/GrandMaSam_Diner/#/',
  },
  {
    cover_img: 'src/assets/images/THEF2E.webp',
    title: 'THE F2E\n2022',
    description: 'THE F2E 2022 黑客松',
    skills: 'ejs, gulp ,Tailwind, GSAP, AOS, Lottie',
    repo_url: 'https://github.com/Bruno-Yu/TheF2E_2022_week1.git',
    page_url: 'https://bruno-yu.github.io/TheF2E_2022_week1/',
  },
  {
    cover_img: 'src/assets/images/點點簽.webp',
    title: 'THE F2E\n2022',
    description: 'THE F2E 2022 點點簽',
    skills: 'Vue 3, Vue CLI, Pinia, Tailwind CSS, Tailwind Elements, pdf.js, fabric.js, jspdf.js',
    repo_url: 'https://github.com/Bruno-Yu/TheF2E_2022_DotSign.git',
    page_url: 'https://bruno-yu.github.io/TheF2E_2022_DotSign/#/',
  },
  {
    cover_img: 'src/assets/images/work03.webp',
    title: 'Coding\nHome',
    description: '程式家教，切版練習',
    skills: 'ejs, gulp ,Bootstrap5',
    repo_url: 'https://github.com/Bruno-Yu/Coding_Home.git',
    page_url: 'https://bruno-yu.github.io/Coding_Home/',
  },
  {
    cover_img: 'src/assets/images/work04.webp',
    title: 'Todo List',
    description: '待辦清單，練習 Create React App 使用以及 RESTful API 串接',
    skills: '串接 Swagger API, React Hook Form, useContext',
    repo_url: 'https://github.com/Bruno-Yu/todolist_react.git',
    page_url: 'https://bruno-yu.github.io/todolist_react/',
  }
]