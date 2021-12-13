<template>
  <VSection :variants="['center:md']">
    <template v-slot:intro>
      <p class="u-text-0 u-color-black"><span class="u-text-decorative">Are you ready for battle</span>?</p>
      <VButton
        href="https://www.paypal.com/paypalme/northernkings/45"
        :variants="['lg:lg', 'decorative', 'invert']"
      >
        Buy your ticket
      </VButton>
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
