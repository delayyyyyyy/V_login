import { defineNuxtPlugin } from '#app'
import { VueCountUp } from 'vue-countup-v3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueCountUp', VueCountUp)
}) 