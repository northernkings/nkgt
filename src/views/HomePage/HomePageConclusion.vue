<template>
  <VSection :variants="['center']">
    <template v-slot:intro>
      <p class="u-text-headline u-color-black">
        <span class="u-text-decorative">Are you ready for battle</span>?
      </p>
      <VButton href="/register" :variants="['lg:lg', 'decorative', 'invert']">
        Register Now
      </VButton>
      <!-- <VButton disabled :variants="['lg:lg', 'decorative', 'invert']">Sold Out</VButton> -->
    </template>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VButton from "~/components/VButton";
import VSection from "~/components/VSection";
import TitleBanner from "~/components/TitleBanner";

export default defineComponent({
  components: {
    VSection,
    VButton,
    TitleBanner,
  },
});
</script>
