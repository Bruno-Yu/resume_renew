<template>
  <nav class="bg-white/90 border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 let-0 w-full z-50">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img width="25px" height="25px" :src="`${imgPath}/images/logo.png`" alt="logo">
    </a>
    <div class="flex  items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button type="button"   class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" @click="toggleLanguageDropdownMenu" >
        {{ currentLanguage }}
      </button>
      <!-- Dropdown -->
      <div  class="z-50 absolute top-10 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" ref="languageDropdownMenu">
        <ul class="py-2 font-medium">
          <li v-for="lang in multiLanguage" :key="lang.menuTab">
            <a type="button" :href="lang.link" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" :class="{ 'disabled-link': (lang.menuTab === currentLanguage) }" role="menuitem" @click="clickLanguageMenuItem">
              <div class="inline-flex items-center">             
                {{ lang.menuTab }}
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" @click="toggleMenuDropdown">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div ref="menuCollapse" class="hidden ml-auto mr-2 w-full md:block md:w-auto">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li v-for="(item, index) in menuContent" :key="index" :class="{ 'hidden': item.hidden }">
          <a  type="button" :href="item.link" class="block py-2 px-3 text-black hover:text-primary rounded md:bg-transparent md:p-0 " aria-current="page" @click="closeMenuTab">{{ isEng ? item.en_menuTab : item.menuTab }}</a>
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
import { Collapse } from 'flowbite'
import { imgPath, multiLanguage } from "../../information"
const { menuContent, isEng } = defineProps(['menuContent', 'isEng'])
const currentLanguage = isEng ? 'English (US)' : '中文 (繁體)'
const languageDropdownMenu = ref<HTMLElement | undefined>()


const menuCollapse = ref<HTMLElement | undefined>()
const menuCollapseInstance = ref()
onMounted(() => {
  if (menuCollapseInstance.value) {
    menuCollapseInstance.value = new Collapse(menuCollapse.value)
  }
})

const toggleMenuDropdown = () => {
  menuCollapseInstance.value.toggle()
}

const closeMenuTab = () => {
  menuCollapseInstance.value.collapse()
}


const toggleLanguageDropdownMenu = () => {
  if (languageDropdownMenu.value) {
    languageDropdownMenu.value.classList.toggle('hidden');
  }
}

const clickLanguageMenuItem = () => {
  if (languageDropdownMenu.value) {
    languageDropdownMenu.value.classList.toggle('hidden');
  }
}

</script>


<style lang="scss" scoped>
.disabled-link {
  pointer-events: none;
  opacity: 0.5
}

</style>