import { ref, onMounted, onUnmounted } from 'vue'

export const useCarousel = (options = {
  interval: 3000,
  autoplay: true
}) => {
  const currentIndex = ref(0)
  const isPlaying = ref(false)
  let timer: NodeJS.Timeout | null = null

  const play = () => {
    if (!options.autoplay) return
    isPlaying.value = true
    timer = setInterval(() => {
      next()
    }, options.interval)
  }

  const pause = () => {
    isPlaying.value = false
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % total.value
  }

  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
  }

  const goTo = (index: number) => {
    currentIndex.value = index
  }

  const total = ref(0)

  const setTotal = (value: number) => {
    total.value = value
  }

  onMounted(() => {
    play()
  })

  onUnmounted(() => {
    pause()
  })

  return {
    currentIndex,
    isPlaying,
    total,
    play,
    pause,
    next,
    prev,
    goTo,
    setTotal
  }
} 