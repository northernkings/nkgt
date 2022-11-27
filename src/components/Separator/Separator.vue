<script lang="ts" setup>
import Separator from "~/assets/images/separator.svg?component";

defineProps({
  compact: Boolean,
});
</script>

<template>
  <div :class="['c-separator', compact && 'c-separator--compact']">
    <Separator />
  </div>
</template>

<style lang="postcss">
@import "~/assets/styles/resources.css";

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

.c-separator--compact {
  padding-top: var(--space-y-1);
  padding-bottom: var(--space-y-1);
  text-align: center;

  @media (--mq-lg) {
    padding-top: var(--space-y-2);
    padding-bottom: var(--space-y-2);
  }
}
</style>
