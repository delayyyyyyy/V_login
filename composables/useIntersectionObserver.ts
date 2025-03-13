import { ref, onMounted, onUnmounted } from 'vue'

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {
    threshold: 0.5,
    rootMargin: '0px'
  }
) => {
  const isVisible = ref(false)
  const observer = ref<IntersectionObserver | null>(null)
  const target = ref<HTMLElement | null>(null)

  const observe = (element: HTMLElement) => {
    target.value = element
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting
      })
    }, options)

    if (target.value) {
      observer.value.observe(target.value)
    }
  }

  const unobserve = () => {
    if (observer.value && target.value) {
      observer.value.unobserve(target.value)
    }
  }

  onUnmounted(() => {
    unobserve()
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    isVisible,
    observe,
    unobserve
  }
} 