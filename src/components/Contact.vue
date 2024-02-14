<template>
  <section :id="id" class="mb-10">
      <h2 class="title mt-14 mb-6  text-center" >{{ title }}</h2>
    <div class="max-w-screen-xl mx-auto">
      <p class="mb-9 text-center">{{ (isEng ? 'Hope you enjoy my work!' : '希望您喜歡我的作品，若有興趣與我合作') }}<span class="block lg:inline">{{ (isEng ? 'if you’re interested in collaborating or have any suggestions, please feel free to contact me!' : '或有任何建議，都歡迎與我聯繫!') }}</span></p>
      <div class="grid grid-cols-1  lg:grid-cols-2">
        <div class="hidden lg:block relative">
          <div class="absolute bottom-0 w-3/4 bg-black h-1/2 z-[-1]"></div>
          <div class="border-3 border-black p-2 w-3/4 xl:w-1/2 mx-auto">
            <img class="w-full h-auto" :src="`${imgPath}/images/contact_me.webp`" alt="contact_me">
          </div>
        </div>
        <div>
          <div class="w-full lg:w-3/4 p-5">
              <VForm action="https://VFormsubmit.co/89a36b0827909cfaa7405e0c39747ab3" v-slot="{ meta }" method="POST">
                <div class="grid mb-5 grid-cols-2 gap-4">
                  <div>
                    <label for="Name" class="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-bold">稱呼 / Name</label>
                    <VField type="text"  rules="required" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-400 focus:border-amber-400 block w-full p-2.5" :name="(isEng ? 'name' : '稱呼')" id="Name" :placeholder="(isEng ? 'please enter your name' : '請輸入您的稱謂')" required />
                    <ErrorMessage class="text-xs text-red-500" :name="(isEng ? 'name' : '稱呼')"/>
                  </div>
                  <div>
                    <label for="Email" class="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-bold">信箱 / Email</label>
                    <VField type="email"  rules="required|email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-400 focus:border-amber-400 block w-full p-2.5"  :name="(isEng ? 'email' : '信箱')" id="Email" placeholder="xxx@abcmail.com" required />
                    <ErrorMessage class="text-xs text-red-500" :name="(isEng ? 'email' : '信箱')"/>
                  </div>
                </div>
                <div class="mb-5">
                  <label for="Subject" class="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-bold">主題 / Subject</label>
                  <VField type="text" rules="required|min:2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-400 focus:border-amber-400 block w-full p-2.5"  :name="(isEng ? 'subject' : '主題')"  id="Subject" :placeholder="(isEng ? 'about' : '關於')" required />
                  <ErrorMessage class="text-xs text-red-500" :name="(isEng ? 'subject' : '主題')" />
                </div>
                <div class="mb-5">
                  <label for="Message" class="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-bold">訊息 / Message</label>
                  <VField as="textarea" type="text" rules="required|min:6" class="bg-gray-50 border border-gray-300 min-h-18 text-gray-900 text-sm rounded-lg focus:ring-amber-400 focus:border-amber-400 block w-full p-2.5"  :name="(isEng ? 'message' : '訊息')" id="Message" :placeholder="(isEng ? 'please write down your message' : '請輸入您的訊息')" required />
                  <ErrorMessage class="text-xs text-red-500" :name="(isEng ? 'message' : '訊息')"/>
                </div>
                <div class="flex justify-center xl:justify-start mt-9">
                  <button type="submit" :disabled="!meta.valid" class="text-black bg-primary disabled:text-black/70 disabled:bg-primary/70 w-full xl:w-2/5 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded text-sm px-5 py-2.5 text-center shadow">{{ (isEng ? 'Send' : '寄出') }}</button>
                </div>
              </VForm>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Contact",
};
</script>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { imgPath } from "../../information"
import type { randomObjectType } from "../../types/utils";
// vee-validate
import {
  Field as VField, Form as VForm, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
// import en from '@vee-validate/i18n/dist/locale/en.json';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

const { titleInfo, isEng } = defineProps(['titleInfo', 'isEng'])
const { title, id } = titleInfo

// 將所有的 驗證規則引入
Object.keys(AllRules as randomObjectType).forEach((rule: string): void => {
  defineRule(rule, (AllRules as randomObjectType)[rule]);
});

const configureOption = { generateMessage: localize({ zh_TW: zhTW }), validateOnInput: true }

configure(configureOption);
setLocale('zh_TW');
// if (isEng) {
//   setLocale('en');
// } else {
//   setLocale('zh_TW');
// }


</script>