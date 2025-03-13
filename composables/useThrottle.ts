import { ref } from 'vue'

export const useThrottle = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) => {
  const lastRun = ref(0)

  const throttledFn = (...args: Parameters<T>) => {
    const now = Date.now()

    if (now - lastRun.value >= delay) {
      fn(...args)
      lastRun.value = now
    }
  }

  return throttledFn
} 