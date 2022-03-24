<template>
  <EditorialSection title="What is a hobby event?" :variants="['padded']">
    <p class="u-text-4">
      The Northern Kings GT celebrates all aspects of the hobby, and the term 'Overall' applies to
      both generalship and skills as a hobbyist.
    </p>
    <p>How it works is there are two standings; 'Battle' and 'Overall'.</p>
    <p>
      'Battle' is what it sounds; It's the scores based soley on generalship, with the highest
      placed player recieving an award for 'Best General'. Though, 10 points of the 'Battle' score
      must still be gained via basic hobby requirements.
    </p>
    <p>
      'Overall' is seen as the superlative. The combined scores of both 'Battle' and 'Hobby'. Up to
      15 points are awarded for 'Hobby' (also known as 'Soft Scores') which will apply to a
      participants standing, with awards for 1st, 2nd and 3rd 'Overall' places.
    </p>
    <p>
      Hobby is a broad term. It does not inclusively mean 'Best Painted'. Hobby is scored by the
      TO's (which includes multiple previous award winning painters) and is based on an army's
      overall aesthetic and “WOW!” factor.
    </p>
    <p>Full details about scoring can be found in <a href="/files/NKGT-2022_EventPack_v1.0.pdf">the tournament pack</a>.</p>
    <template v-slot:media>
      <img
        src="/images/illustration--900x1142.jpg"
        alt="Kings of War illustration"
        width="900"
        height="1142"
        loading="lazy"
        class="u-illustration"
      />
    </template>
  </EditorialSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditorialSection from "~/components/EditorialSection";

export default defineComponent({
  components: {
    EditorialSection,
  },
});
</script>
