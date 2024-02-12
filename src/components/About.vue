<template>
  <section :id="id">
    <h2 class="title mt-14 mb-6  text-center" >{{ title }}</h2>
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 lg:gap-7">
      <div class="hidden lg:block lg:col-span-3">
        <img  class="max-w-full h-auto sticky top-0 rounded-full" src="../assets/images/stamp.png" alt="stamp" >
      </div>
      <div class="lg:col-span-9">
        <div class="w-fulL p-5">
          <h3 class="mb-3  text-3xl font-extrabold text-yellow-400">關於我 <span class="ml-2 text-xl font-bold text-gray-400">About me</span></h3>  
          <p>
            {{ description.about }}
          </p> 
          <ul class="mt-3 flex gap-3">
            <li v-for="media in socialMedia" :key="media.name">
              <a :href="media.link" class="block">
                <img class="w-4 h-4 inline" :src="media.icon" :alt="media.name"/> 
                <span class="ml-1 font-bold text-xs text-secondary">{{ media.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-fulL p-5">
          <h3 class="mb-3 text-3xl font-extrabold text-yellow-400">技能 <span class="ml-2 text-lg font-bold text-gray-400">Skills</span></h3>
          <ul class="grid grid-cols-2 xl:grid-cols-3 gap-3">
            <li v-for="skill in convertedSkills" :key="skill.name" class="border-b border-gray-300 pb-5 h-full">
              <h4 class="text-xl font-extrabold mb-1 text-secondary">{{ skill.name }}</h4>
              <ul class="list-disc text-sm pl-5 text-nowrap">
                <li v-for="detail in skill.details" :key="detail">{{ detail }}</li>
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
import { selfContent, skills, socialMedia } from "../../information"
import { dataConverter } from '../utils/index'
const convertedSelf = dataConverter(selfContent)
const convertedSkills = dataConverter(skills)
const { description } = convertedSelf
const { titleInfo } = defineProps(['titleInfo'])
const { title, id } = titleInfo


</script>