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
        Ossett, West Yorkshire. <span>May 20<sup>th</sup> and 21<sup>st</sup> </span>
      </p>
      <!-- <p class="c-header__strapline u-text-uppercase">
        <UkCokLogo class="c-header__cok" />
        Regional Qualifier
      </p> -->
      <p class="c-header__strapline u-text-uppercase">
        More details to follow…
      </p>
    </div>
    <!-- <div class="c-header__book-now">
      <VButton
        class="c-header__book-now__action"
        href="https://www.paypal.com/paypalme/northernkings/45"
        :variants="['sm', 'lg:lg', 'decorative', 'ghost', 'invert']"
      >
        Buy your ticket
      </VButton>
    </div> -->
  </header>
</template>

<script lang="ts" setup>
import GtLogo from "~/assets/images/nkgt-2023-logo.svg?component";
import NorthernKingsLogo from "~/assets/images/nk-logo-vertical.svg?component";
import UkCokLogo from "~/assets/images/uk-cok-logo.svg?component";
import VButton from "~/components/VButton";
</script>

<style src="./TheHeader.css"></style>
