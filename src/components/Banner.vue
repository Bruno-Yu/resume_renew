<template>
  <section class="flex flex-col justify-center h-[500px]">
    <div class="grid grid-cols-12 h-full border-gray-500 border-y-4">
      <div class="col-span-full lg:col-span-8 bg-primary dark:bg-dark-banner lg:relative">
        <!-- deco svg -->
        <img class="hidden lg:block absolute left-4 top-7" :src="`${imgPath}/images/cure_1.svg`" alt="cure_1" width="50px" height="50px"/>
        <img class="hidden lg:block absolute object-cover w-7 h-12 left-1 bottom-4" :src="`${imgPath}/images/Dots_Square.webp`" alt="cure_2" />
        <img class="hidden lg:block absolute object-cover w-12 h-7 left-[70%] top-1" :src="`${imgPath}/images/Dots_Square.webp`" alt="cure_3" />
        <img class="hidden lg:block absolute object-cover w-12 h-12 left-[90%] bottom-0" :src="`${imgPath}/images/Dots_Square.webp`" alt="cure_4" />
        <!-- 手機板頭像 -->
        <img class="block lg:hidden rounded-full bg-white border border-3 border-black dark:bg-dark-bg dark:border-gray-700 mx-auto my-2 object-cover bg-center  w-40 h-40" :src="selfContent.avatar.mobile" alt="avatar" />
        <div class="grid grid-cols-12 lg:absolute w-full lg:w-4/5 left-[10%] bottom-1 items-end">
          <div class="col-span-12 lg:col-span-10 lg:pl-0">
            <h2 class=" text-center lg:text-start font-bold text-5xl dark:text-dark-white">{{ selfContent.cnName }}<span class="hidden lg:block text-3xl font-bold ">{{ selfContent.enName }}</span></h2>
            <div class="grid grid-cols-2">
              <div class="col col-span-2 xl:col-span-1">
                  <p class="mt-1 lg:mt-0  text-center lg:text-start text-xl mb-1 text-nowrap dark:text-dark-white">{{ isEng ? selfContent.description.en_name : selfContent.description.name }}<span class="block lg:inline ">{{ isEng ? selfContent.description.en_content : selfContent.description.content }}</span></p>
              </div>
              <!-- social media -->
              <div class="col hidden xl:block">
                  <ul class="flex gap-3 items-center">
                      <li v-for="media in socialMedia" :key="media.name"><a :href="media.link" class="block float_icons" target="_blank"><img class="w-4 h-4 inline" :src="media.icon" :alt="media.name"/> </a></li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="col-span-12 mt-5 lg:mt-0 lg:z-20 bg-black/60 h-full px-5 py-6">
            <h2 class="text-primary text-7xl font-bold text-start md:text-center dark:text-dark-primary lg:text-start">{{ selfContent.name }}</h2>
            <h3 class="text-primary font-bold  text-start md:text-center dark:text-dark-primary lg:text-start" > {{ selfContent.career }}</h3>
          </div>
        </div>
      </div>
      <div class="hidden lg:col-span-4 lg:block dark:bg-dark-white relative">
        <!-- deco svg -->
        <img class="hidden lg:inline-block absolute object-cover w-20 h-20 left-[35%] top-8" :src="`${imgPath}/images/Dots_Square_lg.png`" alt="Dots_Square" />
        <img class=" hidden lg:inline-block absolute object-cover w-9 h-20 left-0 top-35" :src="`${imgPath}/images/Dots_Square_lg.png`" alt="Dots_Square" />
        <img class="hidden lg:inline-block absolute left-[60%] bottom-1" :src="`${imgPath}/images/cure_2.svg`" width="100px" height="100px" alt="cure_2" />
        <div class="grid grid-cols-12 absolute w-full h-full right-[50%] justify-center items-center ">
          <div class="col col-span-10 h-80 bg-white border rounded shadow px-2 py-3 dark:bg-dark-white">
            <!-- pc 大頭貼 -->
            <img class="h-full w-full border-4 border-gray-700 object-cover" :src="selfContent.avatar.pc" alt="avatar"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Banner",
};
</script>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { selfContent, socialMedia, imgPath } from "../../information"
defineProps(['isEng'])

</script>
