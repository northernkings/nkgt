<template>
  <div class="l-layout">
    <TheHeader />
    <main class="l-main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TheHeader from '~/components/TheHeader';
  import TheFooter from '~/components/TheFooter';

  export default defineComponent({
    components: {
      TheHeader,
      TheFooter,
    },
  });
</script>
