import type {menuItem, socialItem,  selfcontent, aboutItem, workItem} from "./types/information";

// common
export const socialMedia:socialItem[] = [
  {
    name: 'Github',
    icon: 'src/assets/icons/github.svg',
    link: 'https://github.com/Bruno-Yu',
  },
  {
    name: 'Email',
    icon: 'src/assets/icons/envelope.svg',
    link: 'mailto:jackhellowin@gmail.com',
  },
  {
    name: 'Linkedin',
    icon: 'src/assets/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/bruno-yu-357415253',
  },
    {
    name: 'CakeResume',
    icon: 'src/assets/icons/file-user.svg',
    link: 'https://www.cakeresume.com/s--3QltBjc_WfUv2lo-j1NZmg--/jackhellowin',
  },
]

// menu
export const menuContent:  menuItem[] = [
  {
    menuTab: '/',
    title: '' ,
    id: '',
    link: '#',
    hidden: true,
  },
  {
    menuTab: '關於',
    title: 'About\u0020關於' ,
    id: 'about',
    link: '#about',
    hidden: false,
  },
  {
    menuTab: '作品',
    title: 'Works\u0020作品' ,
    id: 'works',
    link: '#works',
    hidden: false,
  },
  {
    menuTab: '聯繫',
    title: 'Contact\u0020聯繫' ,
    id: 'contact',
    link: '#contact',
    hidden: false,
  }
]

// banner & about's description
export const selfContent: selfcontent = {
  cnName: '余俊毅',
  enName: 'Chin-Yi\u0020YU',
  description: {
    name:'我是布魯諾，' ,
    content: '是名前端開發者' ,
    about: '您好，我是余俊毅，一位前端開發人員！我深信在這變幻莫測的世界中，持續精進自己是不可或缺的軟實力。從對程式的好奇開始，經歷了業界的訓練，這段歷程不僅在興趣中磨練了基本技能，更培養了對新技術持續探索的熱忱和卓越的自學能力。當遇到陌生的領域，我會主動查找相關資源進行補充學習（如 MDN、W3C、Stack Overflow），在解決問題的過程中深刻體會到新技術的誕生常源自對當前問題的深刻理解。我深信「科技始於人性」，並渴望加入一個共同成長的團隊，攜手打造卓越的數位產品。',
    en_about: 'Hello, I’m Bruno Yu, an frontend developer!I firmly believe that continuous self-improvement is an indispensable soft skill in this ever-changing world. Starting from a curiosity about programming, I went through intensive training at work. This journey not only honed my fundamental skills within my interests but also cultivated a passion for continuous exploration of new technologies and exceptional self-learning abilities. When faced with unfamiliar domains, I proactively seek relevant resources for supplementary learning (such as MDN, W3C, Stack Overflow). Throughout problem-solving, I’ve come to understand that the birth of new technologies often stems from a profound understanding of current challenges. I deeply resonate with the phrase ‘Technology begins with humanity’ and aspire to join a team committed to mutual growth, collaborating to create top-notch digital products.'
  },
  name: 'Bruno\u0020YU',
  career: 'Front-end\u0020Developer',
  avatar: {
    pc: 'src/assets/images/avatar.webp',
    mobile: 'src/assets/images/avatar.webp',
  }
}

// About ( skills )
export const skills: aboutItem[] = [
  {
    name: 'Vue',
    details: ['會使用 Vue Cli, Vite, nuxt3 ','使用 Composition API 以及 Option API 開發專案 ', '使用 Vue Axios 串接 API 資料 ', '曾使用 nuxt2 團隊合作開發大型專案', '使用狀態管理工具管理全域狀態 ex: vuex, pinia ']
  },
  {
    name: 'JavaScript / TypeScript',
    details: ['使用 GSAP, jQuery 實作網頁互動效果 ', '透過 AJAX / JSON 串接 RESTful API ', '使用 ESLint 管理程式碼品質 ', '了解 ES6 語言特性' ,'與團隊合作，使用 Typescript 開發大型專案 ']
  },
  {
    name: 'React',
    details: ['使用 Create React App 完成新專案建立 ', '使用 React Hook ', '使用 Context 以及 props 進行元件間的溝通', '以此完成 todo list 等小工具']
  },
  {
    name: 'WebLayout',
    details: ['熟悉 HTML 5, CSS 3, Scss', 'RWD 響應式網頁規劃 ( 手刻 / 套件皆有 )', '熟悉 Bootstrap 5 ','熟悉 Tailwind CSS', '熟悉 element UI 使用']
  },
  {
    name: 'Git',
    details: ['使用 GitHub Page 部屬靜態網頁','孰悉 Git 指令 ', '使用 sourcetree 版本控制介面 ', '團隊合作，共同使用 Git 開發＆維護大型專案'], 
  },
  {
    name: '語言能力(英文)',
    details: ['TOEIC\u0020listening\u0020and\u0020reading\u0020940/990','TOEIC speaking 140/200', 'TOEIC writing 150/200']
  },
]

// experience
export const experience: aboutItem[] = [
  {
    name: '萬點國際任職前端工程師 ( Dec 2022 ~ now )',
    details: [
      '協同開發大型專案 - 龍巖公司的內外網站系統  ( nuxt 2, element ui, web components )',
      '協同開發高雄港務局內部系統 ( vue2, vue-class-component, Typescript, echarts, vue-grid-layout )'
    ]
  }
]


// works 

export const works:workItem[] = [
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