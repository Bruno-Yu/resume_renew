<template>
  <nav class="bg-white/90 border-gray-200 dark:bg-dark-bg/80 dark:border-gray-700 fixed top-0 let-0 w-full z-50">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img width="25px" height="25px" :src="`${imgPath}/images/logo.png`" alt="logo">
    </a>
    <div class="flex  items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <!-- 多國語系 -->
      <button type="button"   class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:text-primary dark:hover:text-dark-primary" @click="toggleLanguageDropdownMenu" >
        {{ currentLanguage }}
      </button>
      <!--暗黑模式-->
      <button ref="themeToggleBtn" id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 text-sm p-2.5" @click="themeToggleMethod">
        <svg ref="themeToggleDarkIcon" id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        <svg ref="themeToggleLightIcon" id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    </button>
      <!-- Dropdown -->
      <div  class="z-50 absolute top-10 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" ref="languageDropdownMenu">
        <ul class="py-2 font-medium">
          <li v-for="lang in multiLanguage" :key="lang.menuTab">
            <a type="button" :href="lang.link" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" :class="{ 'disabled-link': (lang.menuTab === currentLanguage) }" role="menuitem" @click="toggleLanguageDropdownMenu">
              <div class="inline-flex items-center">             
                {{ lang.menuTab }}
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button  type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" @click="toggleMenuDropdown">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div ref="menuCollapse" class="hidden ml-auto mr-2 w-full md:block md:w-auto" >
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li v-for="(item, index) in menuContent" :key="index" :class="{ 'hidden': item.hidden }">
          <a  type="button" :href="item.link" class="block py-2 px-3 text-black hover:text-primary rounded md:bg-transparent md:p-0 dark:text-dark-white dark:hover:text-dark-primary" aria-current="page" @click="toggleMenuDropdown">{{ isEng ? item.en_menuTab : item.menuTab }}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue'
import { imgPath, multiLanguage } from "../../information"
const { menuContent, isEng } = defineProps(['menuContent', 'isEng'])
const currentLanguage = isEng ? 'English (US)' : '中文 (繁體)'

// i18n button
const languageDropdownMenu = ref<HTMLElement | undefined>()
const toggleLanguageDropdownMenu = () => {
  if (languageDropdownMenu.value) {
    languageDropdownMenu.value.classList.toggle('hidden');
  }
}

// navbar button
const menuCollapse = ref<HTMLElement | undefined>()

const toggleMenuDropdown = () => {
  if (menuCollapse.value) {
    menuCollapse.value.classList.toggle('hidden')
  }
}

// flowbite dark mode copy
const themeToggleDarkIcon = ref<HTMLElement | undefined>()
const themeToggleLightIcon = ref<HTMLElement | undefined>()

onMounted(()=> {
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.value.classList.remove('hidden');
  } else {
      themeToggleDarkIcon.value.classList.remove('hidden');
  }
})

// toggle dark mode
const themeToggleBtn = ref<HTMLElement | undefined>();

const themeToggleMethod = () => {
    // toggle icons inside button
    themeToggleDarkIcon.value.classList.toggle('hidden');
    themeToggleLightIcon.value.classList.toggle('hidden');
     // if set via local storage previously
     if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}

</script>


<style lang="scss" scoped>
.disabled-link {
  pointer-events: none;
  opacity: 0.5
}

</style>