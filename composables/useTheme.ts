import { ref, watch } from 'vue'

export const useTheme = () => {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const setTheme = (dark: boolean) => {
    isDark.value = dark
  }

  watch(isDark, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  }, { immediate: true })

  // 初始化主题
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      setTheme(savedTheme === 'dark')
    } else {
      setTheme(prefersDark)
    }
  }

  return {
    isDark,
    toggleTheme,
    setTheme,
    initTheme
  }
} 