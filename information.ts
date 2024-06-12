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
    name: 'Blog',
    icon: `${imgPath}/icons/site-alt.svg`,
    link: 'https://bruno-yu.github.io/bruno_blog/'
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
    link: '/resume_renew/en#',
  },
  {
    menuTab: '中文 (繁體)',
    link: '/resume_renew/#',
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
    about: '您好，我是余俊毅，一位前端開發人員！有近兩年的前端開發經驗，擁有前端開發和傳產專案管理等跨領域經驗背景。具備團隊溝通能力，樂於分享知識與解決問題，有自學能力且喜歡使用新工具。 ',
    en_about: 'Hello, I’m Bruno Yu, an frontend developer! With nearly two years of experience in front-end development, I have a cross-disciplinary background in front-end development and industrial project management. Possessing team communication skills, willing to share knowledge and solve problems, self-learning ability, and enjoy using new tools. '
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
    details: ['使用 Nuxt 2, Nuxt 3, Vite 開發專案','使用 Vue3 Composition API  開發專案 ', '了解 RESTful API 並會使用 AJAX 與其串接 ', '使用 Pinia, Vuex 狀態管理工具管理全域狀態', '了解 ES6 並使用 Typescript 來開發專案'],
    en_details: ['Develop projects using Nuxt 2, Nuxt 3, Vite ', 'Develop projects using Vue3 Composition API ', 'Understand RESTful API and use AJAX to integrate with it ', 'Manage global state using Pinia, Vuex state management tool ', 'Understand ES6 and use TypeScript to develop projects' ]
  },
  // {
  //   name: 'JavaScript / TypeScript',
  //   en_name: 'JavaScript / TypeScript',
  //   details: ['使用 GSAP, jQuery 實作網頁互動效果 ', '透過 AJAX / JSON 串接 RESTful API ', '使用 ESLint 管理程式碼品質 ', '了解 ES6 語言特性' ,'與團隊合作，使用 Typescript 開發大型專案 '],
  //   en_details: [
  //   'Implement web interaction effects using GSAP and jQuery',
  //   'Integrate with RESTful API via AJAX / JSON',
  //   'Manage code quality using ESLint',
  //   'Understand ES6 language features',
  //   'Collaborate with the team to develop large-scale projects using Typescript'
  //   ]
  // // },
  // {
  //   name: 'React',
  //   en_name: 'React',
  //   details: ['使用 Create React App 完成新專案建立 ', '使用 React Hook ', '使用 Context 以及 props 進行元件間的溝通', '以此完成 todo list 等小工具'],
  //   en_details: [    'Complete new project setup using Create React App',
  //   'Utilize React Hooks',
  //   'Communicate between components using Context and props',
  //   'Implemented features such as todo lists and other small tools']
  // },
  {
    name: 'WebLayout',
    en_name: 'WebLayout',
    details: ['使用 Bootstrap 5', '使用 Tailwind CSS ', '使用 element Plus','使用 SCSS ', '孰悉 RWD 響應式網頁  ( 純手刻/套件 )','使用語意化標籤提升網頁可讀性', '使用  CSS3, jQuery, GSAP, Animation.css 實作網頁動畫效果'],
    en_details: [
    'Use Bootstrap 5 ',
    'Use Tailwind CSS ',
    'Use SCSS ',
    'Familiar with RWD responsive web design (pure hand-coded/packages) ',
    'Implement web page animation effects using CSS3, jQuery, GSAP, Animation.css '
    ]
  },
  {
    name: 'Others',
    en_name: 'Others',
    details: ['使用 React.js 開發 todo list 等小工具', '使用 Git 進行版本控制', '可自行閱讀技術文件','JIRA 專案管理','Figma, Adobe XD 基本操作', '基礎 Linux 語法', '基礎 SQL 語法', '前端單元測試 Jest 基礎語法研究', '前端框架 svelte, astro 基礎研究'], 
    en_details: [
    'Developed small tools like a todo list using React.js',
    'Version control using Git',
    'Able to read technical documents independently',
    'Project management with JIRA',
    'Basic operations with Figma and Adobe XD',
    'Basic Linux commands',
    'Basic SQL commands',
    'Basic syntax research for front-end unit testing with Jest',
    'Basic research on front-end frameworks Svelte and Astro'
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
      '大型殯葬業公司的內外服務系統 ( 服務商店、後台系統 ) 開發 :此為大型專案，共同開發系統的前端部分，使用 Nuxt 2 架設前端框架搭配 Element UI 組件庫以及共同狀態管理的 Vuex，並使用本地添加依賴的方法進行共用組件管理，與團隊密切合作，使其順利於有限時間內交付。 ',
      '政府運輸業智慧平台開發:使用 Vue2 框架和相關技術，搭配 Vue-Class-Component、TypeScript、ECharts、Vue-Grid-Layout 套件開發。主要處理前端業務邏輯和數據可視化需求 。 ',
      '雲服務廠商形象官網開發: 使用 Nuxt3 框架搭建 SSR 頁面，搭配 TypeScript、Flowbite 組件工具，建立用戶界面和功能模組 。',
      '網路交易平台開發: 使用 Nuxt3 作為前端框架， TypeScript、Tailwind CSS, Element Plus, Pinia,  i18n 等工具進行產品前後台用戶介面的開發，除了基本開發外，過程中也擔任前端小組長，確認專案開發的進度與人力分配。過程中學習到專案管理、時程管控等經驗。',
      '成立 Typescript 讀書會: 擔任 Typescript 讀書會小組長，為團隊內導入 Typescript 等技術，實踐前端團隊技術的迭代。'
    ],
    en_details: [
    'Developed internal and external service systems (service shops, backstage systems) for a large funeral industry company : This is a large-scale project, jointly developing the front-end part of the system, using Nuxt 2 to build the front-end framework with the Element UI component library and the Vuex for common state management.',
    'Developed a government transportation industry intelligent platform: Developed using Vue2 framework and related technologies, with Vue-Class-Component, TypeScript, ECharts, and Vue-Grid-Layout packages. ',
    'Developed an online trading platform: Using Nuxt3 as the framework, TypeScript, Tailwind CSS, Element Plus, Pinia, i18n and other tools for the development of product front-end and back-end user interfaces. In addition to basic development, also served as the leader of the front-end team, confirming the progress and manpower allocation of the project development.'
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