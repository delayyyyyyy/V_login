import { ref, onMounted } from 'vue'

interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isIOS: boolean
  isAndroid: boolean
  isWindows: boolean
  isMac: boolean
  isLinux: boolean
  isTouch: boolean
  isRetina: boolean
  pixelRatio: number
  screenWidth: number
  screenHeight: number
  orientation: 'portrait' | 'landscape'
  language: string
  timezone: string
}

export const useDevice = () => {
  const device = ref<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isIOS: false,
    isAndroid: false,
    isWindows: false,
    isMac: false,
    isLinux: false,
    isTouch: false,
    isRetina: false,
    pixelRatio: 1,
    screenWidth: 0,
    screenHeight: 0,
    orientation: 'portrait',
    language: '',
    timezone: ''
  })

  const updateDeviceInfo = () => {
    const ua = navigator.userAgent
    const width = window.innerWidth
    const height = window.innerHeight

    device.value = {
      isMobile: /Mobile|Android|iPhone/i.test(ua),
      isTablet: /Tablet|iPad/i.test(ua),
      isDesktop: !(/Mobile|Android|iPhone|Tablet|iPad/i.test(ua)),
      isIOS: /iPhone|iPad|iPod/i.test(ua),
      isAndroid: /Android/i.test(ua),
      isWindows: /Windows/i.test(ua),
      isMac: /Macintosh|MacIntel|MacPPC|Mac68K/i.test(ua),
      isLinux: /Linux/i.test(ua),
      isTouch: 'ontouchstart' in window,
      isRetina: window.devicePixelRatio > 1,
      pixelRatio: window.devicePixelRatio,
      screenWidth: width,
      screenHeight: height,
      orientation: width > height ? 'landscape' : 'portrait',
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  }

  onMounted(() => {
    updateDeviceInfo()
    window.addEventListener('resize', updateDeviceInfo)
    window.addEventListener('orientationchange', updateDeviceInfo)
  })

  return device
} 