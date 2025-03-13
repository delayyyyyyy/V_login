import { ref, onMounted, onUnmounted } from 'vue'

export const useBreakpoint = () => {
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)

  const checkBreakpoint = () => {
    const width = window.innerWidth
    isMobile.value = width < 768
    isTablet.value = width >= 768 && width < 1024
    isDesktop.value = width >= 1024
  }

  onMounted(() => {
    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkBreakpoint)
  })

  return {
    isMobile,
    isTablet,
    isDesktop
  }
} 