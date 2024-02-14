<template>
  <div class="marquee-container" :style="{ 'display': hidden ? 'none' : 'flex' }">
    <div v-for="item in 10" :key="item" class="marquee-content text-white bg-black/90 py-2">
    {{ textContent }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { stringConverter } from '../utils/index'
const { marqueeContent, isEng } = defineProps(['marqueeContent', 'isEng'])
let { hidden, content, en_content } = marqueeContent
const textContent = stringConverter(isEng ? en_content : content)

</script>

<style lang="scss" scoped>

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  display: flex;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 10s linear infinite;
}

</style>