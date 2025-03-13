import { ref, watch } from 'vue'

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
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

  const getItem = <K>(key: string, defaultValue: K): K => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  }

  const setItem = <K>(key: string, value: K) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return {
    value,
    remove,
    clear,
    getItem,
    setItem
  }
} 