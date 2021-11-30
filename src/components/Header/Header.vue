<template>
  <header class="c-header">
    <Logo  class="c-header__logo" />
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Logo from '~/assets/images/nkgt-2022-logo.svg?component';

  export default defineComponent({
    components: {
      Logo,
    },
  });
</script>

<style>
@import '~/assets/styles/resources.css';

.c-header__logo {
  fill: var(--color-brand-abbey);
  width: 512px;
}
</style>
