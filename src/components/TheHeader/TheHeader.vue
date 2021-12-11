<template>
  <header class="c-header">
    <div class="c-header__presents">
      <span class="c-header__presents-label">The</span>
      <NorthernKingsLogo class="c-header__presents-logo" />
      <span class="c-header__presents-label">Present</span>
    </div>
    <div class="c-header__main">
      <div class="c-header__logo">
        <GtLogo class="c-header__logo__image" />
      </div>
      <p class="c-header__date">
        Rothwell, Leeds. <span>May 14th and 15th</span>
      </p>
      <p class="c-header__strapline u-text-uppercase">
        <!-- <img
          class="c-header__cok"
          src="../../assets/images/cok-logo.png"
          alt="Clash of Kings"
        /> -->
        <UkCokLogo class="c-header__cok" />
        Regional Qualifier
      </p>
    </div>
    <div class="c-header__book-now">
      <VButton
        class="c-header__book-now__sm"
        href="/"
        :variants="['sm', 'decorative', 'ghost', 'invert']"
      >
        Buy your ticket
      </VButton>
      <VButton
        class="c-header__book-now__lg"
        href="/"
        :variants="['lg', 'decorative', 'ghost', 'invert']"
      >
        Buy your ticket
      </VButton>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import GtLogo from '~/assets/images/nkgt-2022-logo.svg?component';
  import NorthernKingsLogo from '~/assets/images/nk-logo-vertical.svg?component';
  import UkCokLogo from '~/assets/images/uk-cok-logo.svg?component';
  import VButton from '~/components/VButton';

  export default defineComponent({
    components: {
      GtLogo,
      NorthernKingsLogo,
      VButton,
      UkCokLogo,
    },
  });
</script>

<style src="./TheHeader.css"></style>
