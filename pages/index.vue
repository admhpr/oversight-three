<script lang="ts" setup>
import Container from '@/components/Container.vue';
const portraitImage = '/path/to/your/image.jpg';
</script>
<template>
  <Container>
    <div
      class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-l">
          <img
            :src="portraitImage"
            alt=""
            :sizes="'(min-width: 1024px) 32rem, 20rem'"
            class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
      <ContentDoc v-slot="{ doc }">
        <div class="lg:order-first lg:row-span-2">
          <h1
            class="px-2 py-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
          >
            {{ doc.title }}
          </h1>
          <div
            class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
          >
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </ContentDoc>
      <div class="lg:pl-20">
        <Socials />
      </div>
    </div>
  </Container>
</template>
