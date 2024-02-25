<template>
  <section :id="id">
    <h2 class="title mt-14 mb-6  text-center dark:[text-shadow:_-4px_-2px_2px_rgb(92_213_251)] dark:text-dark-white" >{{ title }}</h2>
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 lg:gap-7">
      <div class="hidden lg:block lg:col-span-3">
        <img  class="stamp max-w-full h-auto sticky top-0 rounded-full" :src="`${imgPath}/images/stamp.png`" alt="stamp" />
      </div>
      <div class="lg:col-span-9">
        <div class="w-fulL p-5">
          <h3 class="mb-3  text-3xl font-extrabold text-yellow-400 dark:text-dark-purple">關於我 <span class="ml-2 text-xl font-bold text-gray-400">About me</span></h3>  
          <p class="dark:text-dark-white">
            {{ isEng ? description.en_about : description.about }}
          </p> 
          <ul class="mt-3 flex gap-3">
            <li v-for="media in socialMedia" :key="media.name">
              <a :href="media.link" class="block group" target="_blank">
                <img class="w-4 h-4 inline" :src="media.icon" :alt="media.name"/> 
                <span class="ml-1 font-bold text-xs text-secondary group-hover:text-primary dark:text-gray-400 dark:group-hover:text-dark-primary">{{ media.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-fulL p-5">
          <h3 class="mb-3 text-3xl font-extrabold text-yellow-400 dark:text-dark-purple">技能 <span class="ml-2 text-lg font-bold text-gray-400">Skills</span></h3>
          <ul class="grid grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="skill in convertedSkills" :key="skill.name" class="border-b border-gray-300 pb-5 h-full">
              <h4 class="text-xl font-extrabold mb-2 text-secondary dark:text-dark-primary">{{ isEng ? skill.en_name : skill.name }}</h4>
              <ul class="list-disc text-sm pl-5 flex flex-col gap-1">
                <li v-for="detail in (isEng ? skill.en_details : skill.details)" class="dark:text-dark-white" :key="detail">{{ detail }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="w-fulL p-5">
          <h3 class="mb-3 text-3xl font-extrabold text-yellow-400 dark:text-dark-purple">經歷 <span class="ml-2 text-lg font-bold text-gray-400">Work experience</span></h3>
          <ul class="grid grid-cols-1 gap-6">
            <li v-for="work in convertedExperience" :key="work.name" class="border-b border-gray-300 pb-5 h-full">
              <h4 class="text-xl font-extrabold mb-2 text-secondary dark:text-dark-primary">{{ isEng ? work.en_name : work.name }}</h4>
              <ul class="list-disc text-sm pl-5 flex flex-col gap-1">
                <li v-for="detail in (isEng ? work.en_details : work.details)" class="dark:text-dark-white" :key="detail">{{ detail }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "About",
};
</script>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { selfContent, skills, experience, socialMedia, imgPath } from "../../information"
import type { selfcontent, aboutItem } from "../../types/information"
import { dataConverter } from '../utils/index'
const convertedSelf: selfcontent = dataConverter(selfContent)
const convertedSkills: aboutItem[] = dataConverter(skills)
const convertedExperience: aboutItem[] = dataConverter(experience)

const { description } = convertedSelf
const { titleInfo, isEng } = defineProps(['titleInfo', 'isEng'])
const { title, id } = titleInfo


</script>