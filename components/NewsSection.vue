<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 gradient-text">新闻动态</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="news in newsItems" :key="news.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ news.title }}</h3>
            <p class="text-gray-600 mb-4">{{ news.summary }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">{{ news.date }}</span>
              <el-button type="primary" text>阅读更多</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const newsItems = [
  {
    id: 1,
    title: 'FinTech荣获2024年度金融科技创新奖',
    summary: '近日，在2024年度金融科技创新大会上，FinTech凭借其创新的智能投顾解决方案...',
    image: '/images/news1.jpg',
    date: '2024-03-15'
  },
  {
    id: 2,
    title: 'FinTech与多家银行达成战略合作',
    summary: 'FinTech今日宣布与国内多家大型银行达成战略合作协议，将共同推进金融科技...',
    image: '/images/news2.jpg',
    date: '2024-03-10'
  },
  {
    id: 3,
    title: 'FinTech发布新一代智能风控系统',
    summary: 'FinTech正式发布新一代智能风控系统，该系统采用最新的人工智能技术...',
    image: '/images/news3.jpg',
    date: '2024-03-05'
  }
]
</script> 