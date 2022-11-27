<template>
  <FeatureSection title="Tournament information" :variants="['padded', 'black', 'reverse:lg']">
    <ul>
      <li>Five game, swiss style tournament with chess clocks.</li>
      <li>60 minute games at 2300 points.</li>
      <li>
        Games will be played using Kings of War version 3.5 ("Big Red Book") and the most recent
        Rules Committee Published FAQ.
      </li>
      <li>The Northern Kings positive scoring system will be in play (see pack).</li>
      <li>
        Lists are to be submitted via email to
        <a href="mailto:lists@thenorthernkings.com">lists@thenorthernkings.com</a>
        by Midnight, Sunday 13th May. Players who submit their list on time will receive a +5
        Tournament Point bonus.
      </li>
      <li>
        Lists are <strong>required</strong> to be generated via the
        <a href="https://companion.manticgames.com/r">Mantic Companion</a>.
      </li>
      <li>
        Awards for the top three 'Overall' players (Battle and Hobby combined), Best General, Best
        Army, Player's Choice, Most Sporting.
      </li>
      <li>
        Lunch will be provided on both days (please advise us in advance of any dietary
        requirements).
      </li>
      <li>Price: <strong>&pound;55.00</strong> per registrant (via PayPal)</li>
    </ul>
    <p>Ensure you read the entire tournament pack before arriving for registration.</p>

    <!-- <VButton href="/files/NKGT-2022_EventPack_v1.0.pdf" :variants="['decorative']">
      <template v-slot:icon>
        <IconDownload />
      </template>
      Download the Tournament Pack
    </VButton> -->

    <p><strong>Tournament Pack to follow.</strong></p>

    <template v-slot:media>
      <img
        src="/images/feature-1--900x600.jpg"
        alt="Kings of War game in action"
        width="900"
        height="600"
        loading="lazy"
      />
    </template>
  </FeatureSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeatureSection from "~/components/FeatureSection";
import VButton from "~/components/VButton";
import IconDownload from "~/assets/images/icon-download.svg?component";

export default defineComponent({
  components: {
    FeatureSection,
    VButton,
    IconDownload,
  },
});
</script>
