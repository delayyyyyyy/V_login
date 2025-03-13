<template>
  <section class="relative h-[60vh] flex items-center bg-[#0F172A]">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-6">
          源投
        </h1>
        <p class="text-3xl text-white mb-16">
          一家仅服务能源行业的投行
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-5xl font-bold text-white mb-3">
              {{ stat.prefix }}{{ stat.value }}{{ stat.suffix }}
            </div>
            <div class="text-white text-xl">{{ stat.label }}</div>
          </div>
        </div>
        <div class="flex justify-center space-x-6">
          <el-button type="primary" size="large" @click="$router.push('/contact')">
            联系我们
          </el-button>
          <el-button size="large" class="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
            了解更多
          </el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { label: '团队规模', value: 50, prefix: '', suffix: '人' },
  { label: '服务用户', value: 1000, prefix: '', suffix: '家' },
  { label: '成交总额', value: 1000, prefix: '¥', suffix: '亿' }
]
</script>

<style scoped>
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
</style> 