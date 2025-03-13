<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold gradient-text">
          登录账户
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">用户名</label>
            <el-input
              id="username"
              v-model="username"
              type="text"
              required
              placeholder="用户名"
              class="mb-4"
            />
          </div>
          <div>
            <label for="password" class="sr-only">密码</label>
            <el-input
              id="password"
              v-model="password"
              type="password"
              required
              placeholder="密码"
              class="mb-4"
              show-password
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <el-checkbox v-model="rememberMe">记住我</el-checkbox>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-primary hover:text-secondary">
              忘记密码？
            </a>
          </div>
        </div>

        <div>
          <el-button
            type="primary"
            class="w-full"
            :loading="loading"
            @click="handleLogin"
          >
            登录
          </el-button>
        </div>
      </form>

      <div class="text-center">
        <p class="text-sm text-gray-600">
          还没有账户？
          <NuxtLink to="/register" class="font-medium text-primary hover:text-secondary">
            立即注册
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import { ElMessage } from 'element-plus'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    const success = await authStore.login(username.value, password.value)
    if (success) {
      ElMessage.success('登录成功')
      router.push('/')
    } else {
      ElMessage.error('登录失败，请检查用户名和密码')
    }
  } catch (error) {
    ElMessage.error('登录出错，请稍后重试')
  } finally {
    loading.value = false
  }
}
</script> 