<template>
  <section :id="id">
    <h2 class="title mt-14 mb-6  text-center dark:[text-shadow:_-4px_-2px_2px_rgb(92_213_251)] dark:text-dark-white" >{{ title }}</h2>
    <div class="max-w-screen-2xl mx-auto p-4">
      <swiper 
      :style="{
        '--swiper-pagination-color': `${bulletColor}`,
        '--swiper-pagination-bullet-inactive-color': '#FFFF',
        '--swiper-pagination-bullet-inactive-opacity': '0.6',
      }" 
      :effect="'coverflow'" 
      :grabCursor="true"
      :pagination="true"
      :centeredSlides="true"
      :initialSlide="1"
      :coverflowEffect="{
        rotate: 0,
        depth: 200,
        scale: 0.8,
        slideShadows: true,
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        776: {
          slidesPerView: 2,
          spaceBetween: 0
        },
      }"
      :modules="modules" class="mySwiper">
      <swiper-slide v-for="(item, index) in works" :key="index">
        <div class="aspect-video group relative" >
          <img class="absolute w-full h-full object-cover" :src="item.cover_img" :alt="item.title" />
          <div class="absolute flex flex-col justify-between w-full h-full  bg-black/30 group-hover:bg-slate-600/30">
            <h3 class="text-white text-5xl font-bold mb-8 mt-auto pl-6 group-hover:text-primary dark:group-hover:text-dark-primary">{{ item.title }}</h3> 
            <div class="flex justify-between gap-1 p-2 items-end lg:p-6">
              <div class="hidden xl:block w-50 p-6 bg-white/80">
                  <p>{{ isEng ? item.en_description : item.description }}</p>
                  <p class="text-sm"> {{ `${(isEng ? 'Skills:' : '技術:')} ${item.skills}` }}</p>
              </div>
              <div class="w-50 flex justify-end">
                <a
                  :href="item.repo_url"
                  class="block bg-slate-50 hover:bg-primary  border px-2 hover:border-black dark:hover:bg-black dark:hover:text-white"
                  >Git_Repo.</a>
                  <a
                  :href="item.page_url"
                  class="block bg-slate-50 hover:bg-primary border px-2 ml-1 hover:border-black dark:hover:bg-black dark:hover:text-white"
                  >Git_Page</a>
              </div>
            </div>
          </div>
        </div> 
      </swiper-slide>
      </swiper>
    </div> 
  </section>
</template>

<script lang="ts">
import {  onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { works } from '../../information'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
  name: 'Works',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: [
    'titleInfo', 'isEng'
  ],
  setup(props: any) {
    const { titleInfo, isEng } = props
    const { title, id } = titleInfo
    const bulletColor = ref('')
    onMounted(()=> {
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    bulletColor.value = 'rgb(92 213 251)'
      // themeToggleLightIcon.value.classList.remove('hidden');
  } else {
    bulletColor.value = 'rgb(255, 203, 66)'
      // themeToggleDarkIcon.value.classList.remove('hidden');
  }
})

    return {
      isEng,
      modules: [EffectCoverflow, Pagination],
      works,
      title,
      id,
      bulletColor
    };
  },
};
</script>