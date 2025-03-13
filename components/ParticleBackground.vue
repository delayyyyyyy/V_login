<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useParticles } from '~/composables/useParticles'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (canvas.value) {
    useParticles(canvas.value)
  }
})
</script>

<style scoped>
canvas {
  pointer-events: none;
  z-index: 0;
}
</style> 