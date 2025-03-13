<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold gradient-text mb-2">
            <vue-count-up
              :start-val="0"
              :end-val="stat.value"
              :duration="2.5"
              :options="{ prefix: stat.prefix, suffix: stat.suffix }"
            />
          </div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueCountUp } from 'vue-countup-v3'

const stats = [
  { label: '团队规模', value: 50, prefix: '', suffix: '人' },
  { label: '服务用户', value: 100, prefix: '', suffix: '家' },
  { label: '成交总额', value: 1000, prefix: '¥', suffix: '亿' }
]
</script> 