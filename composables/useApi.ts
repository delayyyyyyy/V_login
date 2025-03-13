import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useMessage } from './useMessage'

interface ApiResponse<T = any> {
  data: T
  status: number
  message: string
}

export const useApi = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const { error: showError } = useMessage()
  const authStore = useAuthStore()

  const request = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> => {
    loading.value = true
    error.value = null

    try {
      const headers = {
        'Content-Type': 'application/json',
        ...options.headers
      }

      if (authStore.token) {
        headers['Authorization'] = `Bearer ${authStore.token}`
      }

      const response = await fetch(url, {
        ...options,
        headers
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || '请求失败')
      }

      return data
    } catch (err) {
      const message = err instanceof Error ? err.message : '请求失败'
      error.value = message
      showError(message)
      throw err
    } finally {
      loading.value = false
    }
  }

  const get = <T>(url: string) => {
    return request<T>(url)
  }

  const post = <T>(url: string, data: any) => {
    return request<T>(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  const put = <T>(url: string, data: any) => {
    return request<T>(url, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  const del = <T>(url: string) => {
    return request<T>(url, {
      method: 'DELETE'
    })
  }

  return {
    loading,
    error,
    request,
    get,
    post,
    put,
    del
  }
} 