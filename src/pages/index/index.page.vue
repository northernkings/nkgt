<template>
  <TitleBanner
    title="A premium Kings of War tournament celebrating the best of the hobby"
  />
  <EditorialSection title="Devastation, carnage and slaughter await">
    <p>
      The Northern Kings; Adam, Elliot, Nick, Tom and Paul, invite you to join
      them up in t'north for dice rolling and social antics.
    </p>
    <p>
      The Northern Kings GT is a five game, 2300 point of Kings of War event,
      held over two days (14th and 15th May 2022) at The Holy Trinity Parish
      Hall in Rothwell, Leeds. Tickets are priced at &pound;40.00 and include
      lunch on both days.
    </p>
    <p>
      There are awards for top three 'Overall' players (battle, hobby and sports
      combined), Best General, Best Army, Player’s Choice, Most Sporting.
    </p>
    <Button href="/" :variants="['decorative', 'invert']">
      Book your place
    </Button>
    <template v-slot:media>
      <div class="c-media-collage">
        <div class="c-media-collage__section-1">
          <img
            src="../../assets/images/content/in-game-2--600x800.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="c-media-collage__section-2">
          <img
            src="../../assets/images/content/in-game-4--800x600.jpg"
            alt=""
            loading="lazy"
          />
          <img
            src="../../assets/images/content/in-game-1--800x800.jpg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </template>
  </EditorialSection>
  <EditorialSection title="Location and venue" :variants="['reverse']">
    <p>
      The event will be held at The Parish Hall, Holy Trinity Church, Rothwell.
    </p>
    <h3>Venue address</h3>
    <address>
      Parish Hall<br />
      Holy Trinity Church <br />
      Church Street <br />
      Rothwell <br />
      Leeds, LS26 0QL
    </address>
    <template v-slot:media>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.2480738166805!2d-1.4837626341463204!3d53.74946568006551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795d3163040bed%3A0xa66fc2c3309dcd73!2sHoly%20Trinity%20Church%2C%20Rothwell!5e0!3m2!1sen!2suk!4v1639011704847!5m2!1sen!2suk"
        width="100%"
        height="320"
        style="border: 0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </template>
  </EditorialSection>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TitleBanner from '~/components/TitleBanner';
  import Button from '~/components/Button';
  import EditorialSection from '~/components/EditorialSection';

  export default defineComponent({
    components: {
      TitleBanner,
      Button,
      EditorialSection,
    },
  });
</script>

<style src="./index.css"></style>
