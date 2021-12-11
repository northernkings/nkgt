<template>
  <div class="c-separator">
    <Separator />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Separator from '~/assets/images/separator.svg?component';

  export default defineComponent({
    components: {
      Separator,
    },
  });
</script>

<style lang="postcss">
  .c-separator {
    padding-top: var(--space-y-7);
    padding-bottom: var(--space-y-7);
    text-align: center;

    @media (--mq-md) {
      padding-top: var(--space-y-8);
      padding-bottom: var(--space-y-8);
    }

    @media (--mq-lg) {
      padding-top: var(--space-y-12);
      padding-bottom: var(--space-y-12);
    }

    svg {
      width: 30px;
      fill: var(--color-black);
    }
  }
</style>
