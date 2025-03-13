<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 gradient-text">合作伙伴</h2>
      <el-carousel :interval="3000" type="card" height="200px">
        <el-carousel-item v-for="partner in partners" :key="partner.name">
          <div class="h-full flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
            <img :src="partner.logo" :alt="partner.name" class="max-h-24 object-contain">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  { name: '中国工商银行', logo: '/images/partners/bank1.png' },
  { name: '中国建设银行', logo: '/images/partners/bank2.png' },
  { name: '中国农业银行', logo: '/images/partners/bank3.png' },
  { name: '中国银行', logo: '/images/partners/bank4.png' },
  { name: '交通银行', logo: '/images/partners/bank5.png' },
  { name: '招商银行', logo: '/images/partners/bank6.png' }
]
</script>

<style scoped>
.el-carousel__item {
  border-radius: 6px;
  overflow: hidden;
}

.el-carousel__item--card {
  transform: scale(0.9);
  transition: transform 0.3s;
}

.el-carousel__item--card.is-active {
  transform: scale(1);
}
</style> 