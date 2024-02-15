import type {menuItem, socialItem,  selfcontent, aboutItem, workItem, marquee} from "./types/information";

// dev 模式 'public' pro 或 上傳 'https://github.com/Bruno-Yu/resume_renew/blob/main/public'
export const imgPath = import.meta.env.PUBLIC_IMGURL 

// 跑馬燈
export const marqueeContent:marquee = {
  hidden: false, // 開啟/關閉
  content: '(´▽`)ﾉ 感謝您閱讀 (´▽`) (´▽`)ﾉ 歡迎聯繫 (´▽`) (´･ω･`) 若有興趣，歡迎聯繫 (◐‿◑) (´▽`)ﾉ',
  en_content: '(´▽`)ﾉ Thank you for reading (´▽`) (´▽`)ﾉ Feel free to contact me (´▽`) (´･ω･`) If interested, please feel free to contact) (◐‿◑) (´▽`)ﾉ'
}


// common
export const socialMedia:socialItem[] = [
  {
    name: 'Github',
    icon: `${imgPath}/icons/github.svg`,
    link: 'https://github.com/Bruno-Yu',
  },
  {
    name: 'Email',
    icon: `${imgPath}/icons/envelope.svg`,
    link: 'mailto:jackhellowin@gmail.com',
  },
  {
    name: 'Linkedin',
    icon: `${imgPath}/icons/linkedin.svg`,
    link: 'https://www.linkedin.com/in/bruno-yu-357415253',
  },
    {
    name: 'CakeResume',
    icon: `${imgPath}/icons/file-user.svg`,
    link: 'https://www.cakeresume.com/s--3QltBjc_WfUv2lo-j1NZmg--/jackhellowin',
  },
]

// menu
export const menuContent:  menuItem[] = [
  {
    menuTab: '/',
    en_menuTab: '/',
    title: '' ,
    id: '',
    link: '#',
    hidden: true,
  },
  {
    menuTab: '關於',
    en_menuTab: 'About',
    title: 'About\u0020關於' ,
    id: 'about',
    link: '#about',
    hidden: false,
  },
  {
    menuTab: '作品',
    en_menuTab: 'Works',
    title: 'Works\u0020作品' ,
    id: 'works',
    link: '#works',
    hidden: false,
  },
  {
    menuTab: '聯繫',
    en_menuTab: 'Contact',
    title: 'Contact\u0020聯繫' ,
    id: 'contact',
    link: '#contact',
    hidden: false,
  }
]

// i18n
export const multiLanguage:menuItem[] = [
  {
    menuTab: 'English (US)',
    link: '/en#',
  },
  {
    menuTab: '中文 (繁體)',
    link: '/#',
  }
]

// banner & about's description
export const selfContent: selfcontent = {
  cnName: '余俊毅',
  enName: 'Chin-Yi\u0020YU',
  description: {
    name:'我是布魯諾，' ,
    en_name: 'I’m Bruno,\u0020',
    content: '是名前端開發者' ,
    en_content: 'An Frontend Developer',
    about: '您好，我是余俊毅，一位前端開發人員！我深信在這變幻莫測的世界中，持續精進自己是不可或缺的軟實力。從對程式的好奇開始，經歷了業界的訓練，這段歷程不僅在興趣中磨練了基本技能，更培養了對新技術持續探索的熱忱和卓越的自學能力。當遇到陌生的領域，我會主動查找相關資源進行補充學習（如 MDN、W3C、Stack Overflow），在解決問題的過程中深刻體會到新技術的誕生常源自對當前問題的深刻理解。我深信「科技始於人性」，並渴望加入一個共同成長的團隊，攜手打造卓越的數位產品。',
    en_about: 'Hello, I’m Bruno Yu, an frontend developer! I firmly believe that continuous self-improvement is an indispensable soft skill in this ever-changing world. Starting from a curiosity about programming, I went through intensive training at work. This journey not only honed my fundamental skills within my interests but also cultivated a passion for continuous exploration of new technologies and exceptional self-learning abilities. When faced with unfamiliar domains, I proactively seek relevant resources for supplementary learning (such as MDN, W3C, Stack Overflow). Throughout problem-solving, I’ve come to understand that the birth of new technologies often stems from a profound understanding of current challenges. I deeply resonate with the phrase ‘Technology begins with humanity’ and aspire to join a team committed to mutual growth, collaborating to create top-notch digital products.'
  },
  name: 'Bruno\u0020YU',
  career: 'Front-end\u0020Developer',
  avatar: {
    pc: `${imgPath}/images/avatar.webp`,
    mobile: `${imgPath}/images/avatar.webp`,
  }
}

// About ( skills )
export const skills: aboutItem[] = [
  {
    name: 'Vue',
    en_name: 'Vue',
    details: ['會使用 Vue Cli, Vite, Nuxt 3','使用 Composition API 以及 Option API 開發專案 ', '使用 Vue Axios 串接 API 資料 ', '曾使用 Nuxt2 團隊合作開發大型專案', '使用狀態管理工具管理全域狀態 ex: vuex, pinia '],
    en_details: ['Proficient in Vue CLI, Vite, and Nuxt 3', 'Develop projects using both Composition API and Option API', 'Utilize Vue Axios for API data integration', 'Previously collaborated on a large-scale project using Nuxt 2', 'Proficient in global state management tools such as Vuex and Pinia' ]
  },
  {
    name: 'JavaScript / TypeScript',
    en_name: 'JavaScript / TypeScript',
    details: ['使用 GSAP, jQuery 實作網頁互動效果 ', '透過 AJAX / JSON 串接 RESTful API ', '使用 ESLint 管理程式碼品質 ', '了解 ES6 語言特性' ,'與團隊合作，使用 Typescript 開發大型專案 '],
    en_details: [
    'Implement web interaction effects using GSAP and jQuery',
    'Integrate with RESTful API via AJAX / JSON',
    'Manage code quality using ESLint',
    'Understand ES6 language features',
    'Collaborate with the team to develop large-scale projects using Typescript'
    ]
  },
  {
    name: 'React',
    en_name: 'React',
    details: ['使用 Create React App 完成新專案建立 ', '使用 React Hook ', '使用 Context 以及 props 進行元件間的溝通', '以此完成 todo list 等小工具'],
    en_details: [    'Complete new project setup using Create React App',
    'Utilize React Hooks',
    'Communicate between components using Context and props',
    'Implemented features such as todo lists and other small tools']
  },
  {
    name: 'WebLayout',
    en_name: 'WebLayout',
    details: ['熟悉 HTML 5, CSS 3, Scss', 'RWD 響應式網頁規劃 ( 手刻 / 套件皆有 )', '熟悉 Bootstrap 5 ','熟悉 Tailwind CSS', '熟悉 element UI 使用'],
    en_details: [
    'Familiar with HTML 5, CSS 3, SCSS',
    'Responsive web design planning (both hand-coding and utilizing frameworks/libraries)',
    'Proficient in Bootstrap 5',
    'Proficient in Tailwind CSS',
    'Proficient in using Element UI'
    ]
  },
  {
    name: 'Git',
    en_name: 'Git',
    details: ['使用 GitHub Page 部屬靜態網頁','孰悉 Git 指令 ', '使用 sourcetree 版本控制介面 ', '團隊合作，共同使用 Git 開發＆維護大型專案'], 
    en_details: [
    'Deploy static websites using GitHub Pages',
    'Proficient in Git commands',
    'Utilize Sourcetree as a version control interface',
    'Collaborate within a team, utilizing Git for development and maintenance of large-scale projects'
    ]
  },
  {
    name: '語言能力(英文)',
    en_name: 'Language proficiency certificate (English)',
    details: ['TOEIC\u0020listening\u0020and\u0020reading\u0020940/990','TOEIC speaking 140/200', 'TOEIC writing 150/200'],
    en_details: ['TOEIC\u0020listening\u0020and\u0020reading\u0020940/990','TOEIC speaking 140/200', 'TOEIC writing 150/200']
  },
]

// experience
export const experience: aboutItem[] = [
  {
    name: '萬點國際任職前端工程師 ( Dec 2022 ~ now )',
    en_name: 'Wonder4studio ( Dec 2022 ~ now )',
    details: [
      '協同開發大型專案 - 龍巖公司的內外網站系統  ( nuxt 2, element ui, web components )',
      '協同開發高雄港務局內部系統 ( vue2, vue-class-component, Typescript, echarts, vue-grid-layout )'
    ],
    en_details: [
    'Collaborated on the development of the internal and external website system for Longyan Company (using Nuxt 2, Element UI, web components)',
    'Collaborated on the development of the internal system for Kaohsiung Port Authority (using Vue 2, Vue Class Component, Typescript, Echarts, Vue Grid Layout)'
    ]
  }
]


// works 

export const works:workItem[] = [
  {
    cover_img: `${imgPath}/images/work01.webp`,
    title: 'NFT GEL',
    description: '販售 NFT 網站的仿做，嘗試刻劃的練習作品',
    en_description: 'An exercise in attempting to replicate NFT sales website',
    skills: 'ejs,gulp,Bootstrap5',
    repo_url: 'https://github.com/Bruno-Yu/NFT_GEL.git',
    page_url: 'https://bruno-yu.github.io/NFT_GEL/',
  },
  {
    cover_img: `${imgPath}/images/work02.webp`,
    title: 'GrandMaSam\nDiner',
    description: '山姆大嬸餐館，獨樹一格的菜餚與經營方式，一定讓體驗過的您難以忘懷',
    en_description: 'GrandMaSam Diner, with unique dishes and operating style that will surely leave a lasting impression on those who have experienced it',
    skills: 'Vue3,Vue_cli,Bootstrap5',
    repo_url: 'https://github.com/Bruno-Yu/GrandMaSam_Diner.git',
    page_url: 'https://bruno-yu.github.io/GrandMaSam_Diner/#/',
  },
  {
    cover_img: `${imgPath}/images/THEF2E.webp`,
    title: 'THE F2E\n2022',
    description: 'THE F2E 2022 黑客松',
    en_description: 'THE F2E 2022 Hackathon',
    skills: 'ejs, gulp ,Tailwind, GSAP, AOS, Lottie',
    repo_url: 'https://github.com/Bruno-Yu/TheF2E_2022_week1.git',
    page_url: 'https://bruno-yu.github.io/TheF2E_2022_week1/',
  },
  {
    cover_img: `${imgPath}/images/點點簽.webp`,
    title: 'THE F2E\n2022',
    description: 'THE F2E 2022 點點簽',
    en_description: 'THE F2E 2022 Dot Sign',
    skills: 'Vue 3, Vue CLI, Pinia, Tailwind CSS, Tailwind Elements, pdf.js, fabric.js, jspdf.js',
    repo_url: 'https://github.com/Bruno-Yu/TheF2E_2022_DotSign.git',
    page_url: 'https://bruno-yu.github.io/TheF2E_2022_DotSign/#/',
  },
  {
    cover_img: `${imgPath}/images/work03.webp`,
    title: 'Coding\nHome',
    description: '程式家教，切版練習',
    en_description: 'Programming tutoring, exercises in front-end development',
    skills: 'ejs, gulp ,Bootstrap5',
    repo_url: 'https://github.com/Bruno-Yu/Coding_Home.git',
    page_url: 'https://bruno-yu.github.io/Coding_Home/',
  },
  {
    cover_img: `${imgPath}/images/work04.webp`,
    title: 'Todo List',
    description: '待辦清單，練習 Create React App 使用以及 RESTful API 串接',
    en_description: 'To-do list, practice using Create React App and integrating with RESTful API.',
    skills: '串接 Swagger API, React Hook Form, useContext',
    repo_url: 'https://github.com/Bruno-Yu/todolist_react.git',
    page_url: 'https://bruno-yu.github.io/todolist_react/',
  }
]