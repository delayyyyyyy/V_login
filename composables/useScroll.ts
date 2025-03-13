import { ref, onMounted, onUnmounted } from 'vue'

export const useScroll = () => {
  const scrollY = ref(0)
  const scrollX = ref(0)
  const isScrolled = ref(false)

  const handleScroll = () => {
    scrollY.value = window.scrollY
    scrollX.value = window.scrollX
    isScrolled.value = window.scrollY > 0
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToElement = (element: HTMLElement) => {
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    scrollX,
    isScrolled,
    scrollToTop,
    scrollToElement
  }
} 