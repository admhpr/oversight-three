<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useAnime } from '@/composables/useAnime';

const containerRef = ref(null);

const containerClasses = computed(() => 'relative px-4 sm:px-8 lg:px-12');

onMounted(() => {
  useAnime({ targets: containerRef.value, opacity: [0, 1], duration: 3000 });
});
</script>

<template>
  <div :class="containerClasses" ref="containerRef">
    <div
      class="border-l-4 border-indigo-500 px-3 mx-auto max-w-2xl lg:max-w-5xl h-screen"
    >
      <slot></slot>
    </div>
  </div>
</template>
<style></style>
