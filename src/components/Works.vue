<template>
  <section :id="id">
    <h2 class="title mt-14 mb-6  text-center" >{{ title }}</h2>
    <div class="max-w-screen-2xl mx-auto p-4">
      <swiper 
      :style="{
        '--swiper-pagination-color': 'rgb(255, 203, 66)',
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
            <h3 class="text-white text-5xl font-bold mb-8 mt-auto pl-6 group-hover:text-primary">{{ item.title }}</h3> 
            <div class="flex justify-between gap-1 p-2 items-end lg:p-6">
              <div class="hidden xl:block w-50 p-6 bg-white/80">
                  <p>{{ isEng ? item.en_description : item.description }}</p>
                  <p class="text-sm"> {{ `${(isEng ? 'Skills:' : '技術:')} ${item.skills}` }}</p>
              </div>
              <div class="w-50 flex justify-end">
                <a
                  :href="item.repo_url"
                  class="block bg-slate-50 hover:bg-primary  border px-2 hover:border-black"
                  >Git_Repo.</a>
                  <a
                  :href="item.page_url"
                  class="block bg-slate-50 hover:bg-primary border px-2 ml-1 hover:border-black"
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
    return {
      isEng,
      modules: [EffectCoverflow, Pagination],
      works,
      title,
      id
    };
  },
};
</script>