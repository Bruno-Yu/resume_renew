<template>
  <div>
  <footer class="border-t-2 py-6 text-center">
    <p class="text-gray-400 text-sm">© {{ selfContent.name }}. All Rights Reserved</p>
  </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<script lang="ts" setup>
import { selfContent } from "../../information"

</script>
