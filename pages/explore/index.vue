<script setup lang="ts">
import { useAnime } from '@/composables/useAnime';

const animatedContainer = ref(null);

const articleAnimationConfig = {
  targets: '.article',
  translateY: -20,
  opacity: [0, 1],
  easing: 'linear',
  delay: useAnime.stagger(300),
};

onMounted(() => {
  useAnime(articleAnimationConfig);
});
import { ref } from 'vue';

const posts = ref([
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description:
      'Cumque et et. Ut atque quae. Quisquam molestiae id. Autem eaque ea magni quas voluptas corporis. Commodi sit in sit est.',
    imageUrl:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=3600&q=80',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { title: 'SEO', href: '#' },
  },
]);
</script>
<template>
  <Container>
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Some Tezt
      </h2>

      <p class="mt-2 text-lg leading-8 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div
        ref="animatedContainer"
        class="mt-16 space-y-20 lg:mt-20 lg:space-y-20"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="article relative isolate flex flex-col gap-8 lg:flex-row"
        >
          <div
            class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
          >
            <img
              :src="post.imageUrl"
              alt=""
              class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            />
            <div
              class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
            />
          </div>
          <div>
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{
                post.date
              }}</time>
              <a
                :href="post.category.href"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >{{ post.category.title }}</a
              >
            </div>
            <div class="group relative max-w-xl">
              <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
              >
                <a :href="post.href">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
                {{ post.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </Container>
</template>

<style scoped></style>
