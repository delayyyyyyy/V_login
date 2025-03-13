<template>
  <footer class="bg-primary text-gray-300 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold gradient-text mb-4">FinTech</h3>
          <p class="text-sm">
            专注于金融科技创新的领先企业，为客户提供智能化金融解决方案。
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">快速链接</h4>
          <ul class="space-y-2">
            <li v-for="item in quickLinks" :key="item.path">
              <NuxtLink :to="item.path" class="hover:text-secondary transition-colors">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">联系方式</h4>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="ri-map-pin-line mr-2"></i>
              北京市朝阳区科技园区
            </li>
            <li class="flex items-center">
              <i class="ri-phone-line mr-2"></i>
              400-888-8888
            </li>
            <li class="flex items-center">
              <i class="ri-mail-line mr-2"></i>
              contact@fintech.com
            </li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">关注我们</h4>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-secondary transition-colors">
              <i class="ri-weixin-line text-2xl"></i>
            </a>
            <a href="#" class="hover:text-secondary transition-colors">
              <i class="ri-weibo-line text-2xl"></i>
            </a>
            <a href="#" class="hover:text-secondary transition-colors">
              <i class="ri-linkedin-line text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} FinTech. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { name: '首页', path: '/' },
  { name: '产品服务', path: '/services' },
  { name: '关于我们', path: '/about' },
  { name: '新闻动态', path: '/news' },
  { name: '联系我们', path: '/contact' }
]
</script> 