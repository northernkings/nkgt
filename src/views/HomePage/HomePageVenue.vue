<template>
  <EditorialSection title="Venue and Directions" :variants="['reverse:lg']">
    <p>
      The event will be held at The Ossett War Memorial Community Centre. There is a well-stocked
      bar which will be open throughout the event.
    </p>
    <h3>Venue address</h3>
    <address>
      Ossett War Memorial Community Centre<br />
      Prospect Rd<br />
      Ossett, WF5 8AN
    </address>
    <h3>Parking</h3>
    <p>The venue has on-site parking to the rear (follow the sign on entry).</p>
    <template v-slot:media>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.2517617284207!2d-1.5814465840255578!3d53.678138257507584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879611c7847dbe5%3A0xbdefb5f966bbf071!2sOssett%20War%20Memorial%20Community%20Centre!5e0!3m2!1sen!2suk!4v1639404408906!5m2!1sen!2suk"
        width="100%"
        height="380"
        style="border: 1px solid #aaa"
        allowfullscreen
        loading="lazy"
      ></iframe
    ></template>
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
