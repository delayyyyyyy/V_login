import { ref, onMounted, onUnmounted } from 'vue'

interface GeolocationPosition {
  latitude: number
  longitude: number
  accuracy: number
  altitude: number | null
  altitudeAccuracy: number | null
  heading: number | null
  speed: number | null
}

export const useGeolocation = (options: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}) => {
  const position = ref<GeolocationPosition | null>(null)
  const error = ref<GeolocationPositionError | null>(null)
  const isSupported = ref(false)
  let watchId: number | null = null

  const updatePosition = (pos: GeolocationPosition) => {
    position.value = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
      accuracy: pos.coords.accuracy,
      altitude: pos.coords.altitude,
      altitudeAccuracy: pos.coords.altitudeAccuracy,
      heading: pos.coords.heading,
      speed: pos.coords.speed
    }
  }

  const handleError = (err: GeolocationPositionError) => {
    error.value = err
  }

  const startWatch = () => {
    if (!isSupported.value) return

    watchId = navigator.geolocation.watchPosition(
      updatePosition,
      handleError,
      options
    )
  }

  const stopWatch = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId)
      watchId = null
    }
  }

  const getCurrentPosition = () => {
    if (!isSupported.value) return

    navigator.geolocation.getCurrentPosition(
      updatePosition,
      handleError,
      options
    )
  }

  onMounted(() => {
    isSupported.value = 'geolocation' in navigator
    if (isSupported.value) {
      startWatch()
    }
  })

  onUnmounted(() => {
    stopWatch()
  })

  return {
    position,
    error,
    isSupported,
    startWatch,
    stopWatch,
    getCurrentPosition
  }
} 