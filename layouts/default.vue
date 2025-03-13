<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// 布局组件不需要额外的逻辑
</script> 