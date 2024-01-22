<template>
  <div class="text-yellow-100">Vue Count: {{ count }} {{ demo }}</div>
  <button  @click="subtract">-</button>
  <button @click="add">+</button>
  <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
</template>

<script lang="ts">
export default {
  name: "Counter",
};
</script>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps(['demo'])
const count = ref(0)
const add = () => {
  count.value += 1
}
const subtract = () => {
  count.value -= 1
}
</script>

<style scoped></style>