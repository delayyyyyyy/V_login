import { ref, onMounted, onUnmounted } from 'vue'

interface BatteryStatus {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number
}

export const useBattery = () => {
  const battery = ref<BatteryStatus | null>(null)
  const isSupported = ref(false)

  const updateBatteryStatus = (batteryManager: BatteryManager) => {
    battery.value = {
      charging: batteryManager.charging,
      chargingTime: batteryManager.chargingTime,
      dischargingTime: batteryManager.dischargingTime,
      level: batteryManager.level
    }
  }

  const handleChargingChange = (e: Event) => {
    const batteryManager = e.target as BatteryManager
    updateBatteryStatus(batteryManager)
  }

  const handleLevelChange = (e: Event) => {
    const batteryManager = e.target as BatteryManager
    updateBatteryStatus(batteryManager)
  }

  const handleChargingTimeChange = (e: Event) => {
    const batteryManager = e.target as BatteryManager
    updateBatteryStatus(batteryManager)
  }

  const handleDischargingTimeChange = (e: Event) => {
    const batteryManager = e.target as BatteryManager
    updateBatteryStatus(batteryManager)
  }

  onMounted(async () => {
    if ('getBattery' in navigator) {
      try {
        const batteryManager = await (navigator as any).getBattery()
        isSupported.value = true

        updateBatteryStatus(batteryManager)

        batteryManager.addEventListener('chargingchange', handleChargingChange)
        batteryManager.addEventListener('levelchange', handleLevelChange)
        batteryManager.addEventListener('chargingtimechange', handleChargingTimeChange)
        batteryManager.addEventListener('dischargingtimechange', handleDischargingTimeChange)
      } catch (err) {
        console.error('获取电池状态失败:', err)
      }
    }
  })

  onUnmounted(() => {
    if ('getBattery' in navigator) {
      const batteryManager = (navigator as any).getBattery()
      if (batteryManager) {
        batteryManager.removeEventListener('chargingchange', handleChargingChange)
        batteryManager.removeEventListener('levelchange', handleLevelChange)
        batteryManager.removeEventListener('chargingtimechange', handleChargingTimeChange)
        batteryManager.removeEventListener('dischargingtimechange', handleDischargingTimeChange)
      }
    }
  })

  return {
    battery,
    isSupported
  }
} 