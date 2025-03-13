import { ref, watch } from 'vue'

export const useStorage = <T>(key: string, defaultValue: T) => {
  const storedValue = localStorage.getItem(key)
  const value = ref<T>(storedValue ? JSON.parse(storedValue) : defaultValue)

  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })

  const remove = () => {
    localStorage.removeItem(key)
    value.value = defaultValue
  }

  const clear = () => {
    localStorage.clear()
    value.value = defaultValue
  }

  return {
    value,
    remove,
    clear
  }
} 