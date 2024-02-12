export type  menuItem = {
  menuTab: string
  title: string
  id: string
  link: string
  hidden: boolean
}

// common
export const socialMedia = [
  {
    name: 'Github',
    icon: 'src/assets/icons/github.svg',
    link: 'https://github.com/Bruno-Yu',
  },
  {
    name: 'Email',
    icon: 'src/assets/icons/envelope.svg',
    link: 'https://www.cakeresume.com/s--3QltBjc_WfUv2lo-j1NZmg--/jackhellowin',
  },
  {
    name: 'Linkedin',
    icon: 'src/assets/icons/linkedin.svg',
    link: 'https://www.cakeresume.com/s--3QltBjc_WfUv2lo-j1NZmg--/jackhellowin',
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
export const selfContent = {
  cnName: '余俊毅',
  enName: 'Chin-Yi\u0020YU',
  description: {
    name:'我是布魯諾，' ,
    content: '現在是名前端工程師' ,
    about: '嗨，我是余俊毅，是個前端開發人員!我深信在這多變的世界裡持續精進自己是必備的軟實力，從初識程式的好奇到經歷六角的程式訓練，在過程中除了在興趣中磨練基本功外，更培養了對於新技術持續探索的熱忱與良好的自學能力，倘若遇到不孰悉的範疇，會自行查找相關資源補充學習 ( MDN、W3C、Stack Overflow ) ，在解決問題的過程中理解到往往新技術的誕生是源自於當下所遇到的問題而對於"科技始於人性"這句話有更深的感觸，希望能加入共同成長的團隊，一起打造一流的數位產品。'
  },
  name: 'Bruno\u0020YU',
  career: 'Front-end\u0020Developer',
  avatar: {
    pc: 'src/assets/images/avatar.webp',
    mobile: 'src/assets/images/avatar.webp',
  }
}

// About ( skills )
export const skills = [
  {
    name: 'Vue',
    details: ['Vue3','Vue\u0020Cli', '元件管理', 'SPA', 'Vue\u0020Router', 'Axios']
  },
  {
    name: 'React',
    details: ['Create\u0020React\u0020App', 'React\u0020Hook', 'Context,\u0020props']
  },
  {
    name: 'JavaScript',
    details: ['AJAX 串接 RESTful API', 'ES6', 'swiper.js']
  },
  {
    name: 'WebLayout',
    details: ['HTML5,\u0020CSS,\u0020SCSS', 'Tailwind', 'BootStrap\u00205']
  },
  {
    name: 'Git',
    details: ['GitHub\u0020Pages,Git\u0020指令', 'sourcetree']
  },
  {
    name: '語言能力',
    details: ['TOEIC\u0020listening\u0020and\u0020reading\u0020940/990','TOEIC speaking 140/200', 'TOEIC writing 150/200']
  },
]

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