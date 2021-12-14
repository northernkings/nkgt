<template>
  <EditorialSection title="Devastation, carnage and slaughter awaits" :variants="['reverse:sm']">
    <p class="u-text-4">
      The Northern Kings; Adam, Elliot, Nick, Tom and Paul, invite you to join them up in t'north
      for dice rolling and social antics.
    </p>
    <p>
      The Northern Kings GT is a five game, 2300 point Kings of War event, held over two days (17th
      and 18th June 2022) at The Ossett War Memorial Community Centre, Wakefield. Tickets are priced
      at
      <strong>&pound;45.00</strong> and include a proper lunch on both days and a planned evening
      social.
    </p>
    <VButton
      href="https://www.paypal.com/paypalme/northernkings/45"
      :variants="['lg:lg', 'decorative', 'invert']"
    >
      Buy your ticket
    </VButton>
    <template v-slot:media>
      <div class="c-media-collage">
        <div class="c-media-collage__section-1">
          <img
            src="/images/in-game-5--600x800.jpg"
            alt="Kings of War miniatures"
            width="600"
            height="800"
            loading="lazy"
          />
        </div>
        <div class="c-media-collage__section-2">
          <img
            src="/images/in-game-4--800x600.jpg"
            alt="Players at a Northern Kings event"
            width="800"
            height="600"
            loading="lazy"
          />
          <img
            src="/images/in-game-1--800x800.jpg"
            alt="Rusty at a Northern Kings event"
            width="800"
            height="800"
            loading="lazy"
          />
        </div>
      </div>
    </template>
  </EditorialSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditorialSection from "~/components/EditorialSection";
import VButton from "~/components/VButton";

export default defineComponent({
  components: {
    EditorialSection,
    VButton,
  },
});
</script>
