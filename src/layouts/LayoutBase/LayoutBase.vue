<template>
  <div class="l-layout">
    <Header />
    <main class="l-main">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '~/components/Header';

  export default defineComponent({
    components: {
      Header,
    },
  });
</script>
