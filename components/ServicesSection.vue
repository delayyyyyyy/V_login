<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 gradient-text">产品服务</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title" 
             class="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
          <div class="text-4xl mb-4">
            <i :class="service.icon"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: '智能投顾',
    description: '基于人工智能的个性化投资建议，为您提供专业的资产配置方案。',
    icon: 'ri-line-chart-line'
  },
  {
    title: '数字支付',
    description: '安全便捷的支付解决方案，支持多种支付方式和场景。',
    icon: 'ri-wallet-3-line'
  },
  {
    title: '智能风控',
    description: '运用大数据和机器学习技术，提供全方位的风险控制服务。',
    icon: 'ri-shield-check-line'
  }
]
</script> 