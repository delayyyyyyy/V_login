<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold gradient-text">
          注册账户
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
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
            <label for="email" class="sr-only">电子邮箱</label>
            <el-input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="电子邮箱"
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
          <div>
            <label for="confirmPassword" class="sr-only">确认密码</label>
            <el-input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
              placeholder="确认密码"
              class="mb-4"
              show-password
            />
          </div>
        </div>

        <div class="flex items-center">
          <el-checkbox v-model="agreeTerms">
            我同意
            <a href="#" class="font-medium text-primary hover:text-secondary">服务条款</a>
            和
            <a href="#" class="font-medium text-primary hover:text-secondary">隐私政策</a>
          </el-checkbox>
        </div>

        <div>
          <el-button
            type="primary"
            class="w-full"
            :loading="loading"
            :disabled="!agreeTerms"
            @click="handleRegister"
          >
            注册
          </el-button>
        </div>
      </form>

      <div class="text-center">
        <p class="text-sm text-gray-600">
          已有账户？
          <NuxtLink to="/login" class="font-medium text-primary hover:text-secondary">
            立即登录
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeTerms = ref(false)
const loading = ref(false)

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    ElMessage.error('两次输入的密码不一致')
    return
  }

  loading.value = true
  try {
    // 这里应该调用实际的注册 API
    // 模拟 API 调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    ElMessage.success('注册成功')
    router.push('/login')
  } catch (error) {
    ElMessage.error('注册失败，请稍后重试')
  } finally {
    loading.value = false
  }
}
</script> 