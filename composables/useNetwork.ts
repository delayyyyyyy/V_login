import { ref, onMounted, onUnmounted } from 'vue'

export const useNetwork = () => {
  const isOnline = ref(navigator.onLine)
  const isOffline = ref(!navigator.onLine)
  const networkType = ref<string>('')

  const updateNetworkStatus = () => {
    isOnline.value = navigator.onLine
    isOffline.value = !navigator.onLine

    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      networkType.value = connection.effectiveType || connection.type || ''
    }
  }

  const handleOnline = () => {
    isOnline.value = true
    isOffline.value = false
  }

  const handleOffline = () => {
    isOnline.value = false
    isOffline.value = true
  }

  onMounted(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      connection.addEventListener('change', updateNetworkStatus)
      networkType.value = connection.effectiveType || connection.type || ''
    }
  })

  onUnmounted(() => {
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)

    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      connection.removeEventListener('change', updateNetworkStatus)
    }
  })

  return {
    isOnline,
    isOffline,
    networkType
  }
} 