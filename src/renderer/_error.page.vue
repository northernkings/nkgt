<script lang="ts" setup>
import LayoutBase from "~/layouts/LayoutBase";

defineProps({
  is404: Boolean,
});
</script>

<template>
  <LayoutBase :small-header="true">
    <div v-if="is404" class="error">
      <h1>404 Page Not Found</h1>
      <p>This page could not be found.</p>
    </div>
    <div v-else class="error">
      <h1>500 Internal Server Error</h1>
      <p>Something went wrong.</p>
    </div>
  </LayoutBase>
</template>

<style>
.error {
  padding: 3rem;
  text-align: center;
}
</style>
