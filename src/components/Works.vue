<template>
  <section id="works">
    <h2 class="mt-14 mb-6  text-center" >Works 作品</h2>
    <swiper  
    :effect="'coverflow'" 
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="3"
    :initialSlide="1"
    :spaceBetween="0"
    :coverflowEffect="{
      rotate: 0,
      depth: 200,
      scale: 0.8,
      slideShadows: true,
    }"
    :modules="modules" class="mySwiper">
    <swiper-slide v-for="(item, index) in works" :key="index">
      <div class="aspect-video group relative" >
        <img class="absolute w-full h-full object-cover" :src="item.cover_img" :alt="item.title" />
        <div class="absolute flex flex-col justify-between w-full h-full  bg-black/30 group-hover:bg-slate-600/30">
          <h3 class="text-white text-5xl font-bold mb-8 mt-auto pl-6 group-hover:text-primary">{{ item.title }}</h3> 
          <div class="flex justify-between gap-1 p-2 items-end lg:p-6">
            <div class="hidden xl:block w-50 p-6 bg-white/80">
                <p>{{ item.description }}</p>
                <p class="text-sm"> 技術: {{ item.skills }}</p>
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
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
      works
    };
  },
};
</script>


<style lang="scss" scoped>

</style>