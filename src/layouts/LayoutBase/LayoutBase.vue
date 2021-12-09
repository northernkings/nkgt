<template>
  <div class="l-layout">
    <Header />
    <main class="l-main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '~/components/Header';
  import Footer from '~/components/Footer';

  export default defineComponent({
    components: {
      Header,
      Footer,
    },
  });
</script>
