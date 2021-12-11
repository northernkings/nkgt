<template>
  <footer class="c-footer">
    <NorthernKingsLogo class="c-footer__logo" />
    <p class="c-footer__copyright">
      <span>&copy; Copyright of The Northern Kings. </span>
      <span>All rights reserved.</span>
    </p>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NorthernKingsLogo from '~/assets/images/nk-logo-vertical.svg?component';

  export default defineComponent({
    components: {
      NorthernKingsLogo,
    },
  });
</script>

<style src="./TheFooter.css"></style>
