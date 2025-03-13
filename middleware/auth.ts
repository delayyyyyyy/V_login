import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated

  // 需要认证的路由
  if (to.meta.requiresAuth && !isAuthenticated) {
    return navigateTo('/login')
  }

  // 已认证用户不能访问登录和注册页面
  if (isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/')
  }
}) 