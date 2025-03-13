import { ref } from 'vue'
import { useMessage } from './useMessage'

export const useClipboard = () => {
  const { success, error } = useMessage()
  const isSupported = ref(false)

  const copy = async (text: string) => {
    try {
      if (!navigator.clipboard) {
        throw new Error('剪贴板API不支持')
      }

      await navigator.clipboard.writeText(text)
      success('复制成功')
      return true
    } catch (err) {
      error('复制失败')
      return false
    }
  }

  const paste = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error('剪贴板API不支持')
      }

      const text = await navigator.clipboard.readText()
      return text
    } catch (err) {
      error('粘贴失败')
      return null
    }
  }

  const checkSupport = () => {
    isSupported.value = !!navigator.clipboard
    return isSupported.value
  }

  return {
    isSupported,
    copy,
    paste,
    checkSupport
  }
} 