<template>
  <TitleBanner title="A Kings of War tournament celebrating the very best of the hobby" />
  <HomePageOverview />
  <HomePageInformation />
  <HomePageSchedule />
  <Separator />
  <HomePageVenue />
  <HomePageAccommodation />
  <HomePageSponsorship />
  <Separator />
  <HomePageConclusion />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleBanner from "~/components/TitleBanner";
import Separator from "~/components/Separator";
import HomePageOverview from "./HomePageOverview.vue";
import HomePageInformation from "./HomePageInformation.vue";
import HomePageAccommodation from "./HomePageAccommodation.vue";
import HomePageSponsorship from "./HomePageSponsorship.vue";
import HomePageSchedule from "./HomePageSchedule.vue";
import HomePageVenue from "./HomePageVenue.vue";
import HomePageConclusion from "./HomePageConclusion.vue";

export default defineComponent({
  components: {
    TitleBanner,
    Separator,
    HomePageOverview,
    HomePageInformation,
    HomePageAccommodation,
    HomePageSponsorship,
    HomePageSchedule,
    HomePageVenue,
    HomePageConclusion,
  },
});
</script>

<style src="./HomePage.css"></style>
