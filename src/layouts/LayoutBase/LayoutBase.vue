<script lang="ts" setup>
import TheHeader from "~/components/TheHeader";
import TheFooter from "~/components/TheFooter";

defineProps({
  compactHeader: Boolean,
});
</script>

<template>
  <div class="l-layout">
    <TheHeader :compact="compactHeader" />
    <main class="l-main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
