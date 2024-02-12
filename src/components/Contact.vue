<template>
  <section :id="id" class="mb-10">
      <h2 class="title mt-14 mb-6  text-center" >{{ title }}</h2>
    <div class="max-w-screen-xl mx-auto">
      <p class="mb-9 text-center">希望您喜歡我的作品，若有興趣與我合作<span class="block lg:inline">或有任何建議，都歡迎與我聯繫!</span></p>
      <div class="grid grid-cols-1  lg:grid-cols-2">
        <div class="hidden lg:block relative">
          <div class="absolute bottom-0 w-3/4 bg-black h-1/2 z-[-1]"></div>
          <div class="border-3 border-black p-2 w-3/4 xl:w-1/2 mx-auto">
            <img class="w-full h-auto" src="../assets/images/contact_me.webp" alt="contact_me">
          </div>
        </div>
        <div>
          <div class="w-full lg:w-3/4 p-5">
              <form action="https://formsubmit.co/89a36b0827909cfaa7405e0c39747ab3" method="POST">
                <div class="grid mb-5 grid-cols-2 gap-4">
                  <div>
                    <label for="Name" class="block mb-2 text-sm font-bold">稱呼 / Name</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="name" id="Name" placeholder="請輸入您的稱謂" required />
                  </div>
                  <div>
                    <label for="Email" class="block mb-2 text-sm font-bold">信箱 / Email</label>
                    <input type="email"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  name="email" id="Email" placeholder="xxx@abcmail.com" required />
                  </div>
                </div>
                <div class="mb-5">
                  <label for="Subject" class="block mb-2 text-sm font-bold">主題 / Subject</label>
                  <input type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  name="subject"  id="Subject" placeholder="關於" required />
                </div>
                <div class="mb-5">
                  <label for="Message" class="block mb-2 text-sm font-bold">訊息 / Message</label>
                  <textarea type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  name="message" id="Message" rows="5" placeholder="請輸入您的訊息" required />
                </div>
                <div class="flex justify-center xl:justify-start mt-9">
                  <button type="submit" class="text-black bg-primary w-full xl:w-2/5 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded text-sm px-5 py-2.5 text-center shadow">寄出</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const { titleInfo } = defineProps(['titleInfo'])
const { title, id } = titleInfo


</script>