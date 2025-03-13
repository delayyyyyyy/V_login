<template>
  <nav class="fixed w-full z-50 bg-primary/90 backdrop-blur-lg">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center">
          <span class="text-2xl font-bold gradient-text">FinTech</span>
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-300 hover:text-secondary transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-4">
          <template v-if="!authStore.isAuthenticated">
            <NuxtLink 
              to="/login" 
              class="px-4 py-2 rounded-lg bg-secondary text-primary hover:bg-secondary/90 transition-colors"
            >
              登录
            </NuxtLink>
          </template>
          <template v-else>
            <el-dropdown>
              <span class="text-secondary cursor-pointer">
                {{ authStore.username }} <i class="ri-arrow-down-s-line"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item @click="authStore.logout">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const menuItems = [
  { name: '首页', path: '/' },
  { name: '产品服务', path: '/services' },
  { name: '关于我们', path: '/about' },
  { name: '新闻动态', path: '/news' },
  { name: '联系我们', path: '/contact' }
]
</script> 