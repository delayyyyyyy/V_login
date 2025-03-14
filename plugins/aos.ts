import { defineNuxtPlugin } from '#app'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.vueApp.use(AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    }))
  }
}) 