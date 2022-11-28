<template>
  <EditorialSection title="Devastation, carnage and slaughter awaits" :variants="['reverse:sm']">
    <p class="u-text-4">
      The Northern Kings invite you to join them up in t'north for dice rolling and social antics.
    </p>
    <p>
      The Northern Kings GT is a five game, 2300 point Kings of War event, held over two days (20th
      and 21st May 2023) at The Ossett War Memorial Community Centre, Wakefield.
    </p>
    <p>
      <strong>More details to follow, but early registration is now open</strong>. Tickets are
      priced at <strong>&pound;55.00</strong>, include a proper lunch on both days and a planned
      evening social.
    </p>
    <VButton href="/register" :variants="['lg:lg', 'decorative', 'invert']"> Register Now </VButton>
    <template v-slot:media>
      <div class="c-media-collage">
        <div class="c-media-collage__section-1">
          <img
            src="/images/in-game-2023-5--600x800.webp"
            alt="Kings of War miniatures"
            width="600"
            height="800"
            loading="lazy"
          />
        </div>
        <div class="c-media-collage__section-2">
          <img
            src="/images/in-game-2023-4--800x600.webp"
            alt="Kings of War miniatures"
            width="800"
            height="600"
            loading="lazy"
          />
          <img
            src="/images/in-game-2023-1--800x800.webp"
            alt="Players at a Northern Kings event"
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
