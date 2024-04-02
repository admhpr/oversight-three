<script lang="ts" setup>
import { ref, computed } from 'vue';
import clsx from 'clsx';

const containerRef = ref(null);

const containerClasses = computed(() => clsx('relative px-4 sm:px-8 lg:px-12'));
</script>

<template>
  <div :class="containerClasses" ref="containerRef">
    <div class="mx-auto max-w-2xl lg:max-w-5xl">
      <slot></slot>
    </div>
  </div>
</template>
