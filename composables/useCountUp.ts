import { ref, onMounted } from 'vue'
import { VueCountUp } from 'vue-countup-v3'

export const useCountUp = () => {
  const isCounting = ref(false)

  const startCountUp = (element: HTMLElement, endVal: number, options = {}) => {
    const countUp = new VueCountUp({
      element,
      endVal,
      duration: 2.5,
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
      ...options
    })

    countUp.start()
    isCounting.value = true
  }

  const stopCountUp = () => {
    isCounting.value = false
  }

  return {
    isCounting,
    startCountUp,
    stopCountUp
  }
} 