<script lang="ts" setup>
import TitleBanner from "~/components/TitleBanner";
import Separator from "~/components/Separator";
import HomePageOverview from "./HomePageOverview.vue";
// import HomePageInformation from "./HomePageInformation.vue";
import HomePageAccommodation from "./HomePageAccommodation.vue";
// import HomePageSponsorship from "./HomePageSponsorship.vue";
// import HomePageSchedule from "./HomePageSchedule.vue";
import HomePageVenue from "./HomePageVenue.vue";
import HomePageConclusion from "./HomePageConclusion.vue";
import HomePageHobby from "./HomePageHobby.vue";
import LayoutBase from "~/layouts/LayoutBase";
</script>

<template>
  <LayoutBase>
    <TitleBanner title="A Kings of War tournament celebrating the very best of the hobby" />
    <HomePageOverview />
    <!-- <HomePageInformation /> -->
    <HomePageHobby />
    <!-- <HomePageSchedule /> -->
    <Separator />
    <HomePageVenue />
    <HomePageAccommodation />
    <!-- <HomePageSponsorship /> -->
    <Separator />
    <HomePageConclusion />
  </LayoutBase>
</template>

<style src="./HomePage.css"></style>
