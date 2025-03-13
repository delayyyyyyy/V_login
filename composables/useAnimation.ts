import { ref, onMounted } from 'vue'
import AOS from 'aos'

export const useAnimation = () => {
  const isAnimating = ref(false)

  const initAOS = () => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: 'ease-in-out'
    })
  }

  const refreshAOS = () => {
    AOS.refresh()
  }

  const destroyAOS = () => {
    AOS.destroy()
  }

  onMounted(() => {
    initAOS()
  })

  return {
    isAnimating,
    refreshAOS,
    destroyAOS
  }
} 