import { defineStore } from 'pinia'

interface User {
  id: number
  username: string
  email: string
}

interface AuthState {
  user: User | null
  token: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    currentUser: (state) => state.user
  },

  actions: {
    async login(username: string, password: string) {
      try {
        // 这里应该调用实际的登录 API
        // 模拟 API 调用
        const response = await new Promise<{ user: User; token: string }>((resolve) => {
          setTimeout(() => {
            resolve({
              user: {
                id: 1,
                username,
                email: `${username}@example.com`
              },
              token: 'dummy-token'
            })
          }, 1000)
        })

        this.user = response.user
        this.token = response.token

        // 存储到 localStorage
        localStorage.setItem('user', JSON.stringify(response.user))
        localStorage.setItem('token', response.token)

        return true
      } catch (error) {
        console.error('Login failed:', error)
        return false
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },

    // 从 localStorage 恢复状态
    restoreState() {
      const user = localStorage.getItem('user')
      const token = localStorage.getItem('token')

      if (user && token) {
        this.user = JSON.parse(user)
        this.token = token
      }
    }
  },

  persist: true
}) 