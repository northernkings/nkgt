<template>
  <VSection title="Sponsorship" :variants="['padded']">
    <template v-slot:intro>
      <p>
        Prize support is made possible by our amazing sponsors. Please take a minute to check out
        their websites:
      </p>
    </template>
    <ul class="c-sponsors__list u-list-logos">
      <li class="c-sponsors__sponsor c-sponsors__sponsor--mantic">
        <a href="https://www.manticgames.com/">
          <img
            src="/images/sponsor-mantic.jpg"
            alt="Mantic"
            width="200"
            height="177"
            loading="lazy"
          />
        </a>
      </li>
      <li class="c-sponsors__sponsor c-sponsors__sponsor--elysium">
        <a href="https://www.elysiumwargames.com/">
          <img
            src="/images/sponsor-elysium.jpg"
            alt="Elysium Wargames"
            width="200"
            height="170"
            loading="lazy"
          />
        </a>
      </li>
    </ul>
    <p>
      If you would like to sponsor our event, please get in touch:
      <a href="mailto:sponsorship@thenorthernkings.com">sponsorship@thenorthernkings.com</a>
    </p>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "~/components/VSection";

export default defineComponent({
  components: {
    VSection,
  },
});
</script>

<style lang="postcss">
@import "~/assets/styles/resources.css";

.c-sponsors__list {
  display: flex;
  align-items: center;
  gap: var(--grid-gap);
  margin-top: var(--grid-gap);
  justify-content: center;
  max-width: none;

  @media (--mq-md) {
    justify-content: flex-start;
  }
}

.c-sponsors__list li {
  display: block;
  margin: 0;
  padding: 0;

  &:before {
    display: none;
  }
}

.c-sponsors__logo {
  fill: currentColor;
}

.c-sponsors__logo--ramada {
  height: 90px;
}

.c-sponsors__logo--holiday-inn {
  height: 120px;
}

.c-sponsors__logo--mews {
  height: 110px;
}
</style>
