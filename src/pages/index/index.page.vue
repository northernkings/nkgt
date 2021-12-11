<template>
  <TitleBanner
    title="A Kings of War tournament celebrating the very best of the hobby"
  />
  <EditorialSection
    title="Devastation, carnage and slaughter awaits"
    :variants="['reverse:sm']"
  >
    <p>
      The Northern Kings; Adam, Elliot, Nick, Tom and Paul, invite you to join
      them up in t'north for dice rolling and social antics.
    </p>
    <p>
      The Northern Kings GT is a five game, 2300 point Kings of War event, held
      over two days (14th and 15th May 2022) at The Holy Trinity Parish Hall in
      Rothwell, Leeds. Tickets are priced at <strong>&pound;40.00</strong> and
      include lunch on both days.
    </p>
    <p>
      There are awards for top three 'Overall' players (Battle and Hobby
      combined), Best General, Best Army, Player's Choice, Most Sporting.
    </p>
    <VButton href="/" :variants="['decorative', 'invert']">
      Buy your ticket
    </VButton>
    <template v-slot:media>
      <div class="c-media-collage">
        <div class="c-media-collage__section-1">
          <img src="/images/in-game-5--600x800.jpg" alt="" loading="lazy" />
        </div>
        <div class="c-media-collage__section-2">
          <img src="/images/in-game-4--800x600.jpg" alt="" loading="lazy" />
          <img src="/images/in-game-1--800x800.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </template>
  </EditorialSection>
  <FeatureSection
    title="Tournament information"
    :variants="['padded', 'black', 'reverse:lg']"
  >
    <ul>
      <li>
        Lists to be submitted to
        <a href="mailto:lists@thenorthernkings.com">
          lists@thenorthernkings.com
        </a>
        by Midnight, 8th May. Players who submit on time will receive a +5
        Tournament Point bonus.
      </li>
      <li>Five game, swiss style tournament with chess clocks.</li>
      <li>50 minute games at 2300 points.</li>
      <li>Each player is to bring a chess clock.</li>
      <li>
        Games will be played using Kings of War 3rd Edition, Uncharted Empires,
        Rules Committee Published FAQ and Clash of Kings 2022 Supplement.
      </li>
      <li>
        The Northern Kings positive scoring system will be in play (see pack).
      </li>
      <li>
        Lunch is included on both days (please advise of any dietary
        requirements).
      </li>
      <li>Price: <strong>&pound;40.00</strong> per registrant (via PayPal)</li>
    </ul>
    <VButton href="/" :variants="['decorative']">
      <template v-slot:icon>
        <IconDownload />
      </template>
      Download the Tournament Pack
    </VButton>
    <template v-slot:media>
      <img src="/images/feature-1--900x600.jpg" alt="" loading="lazy" />
    </template>
  </FeatureSection>
  <VSection title="Schedule" :variants="['padded']">
    <div class="l-grid l-grid--cols-2:md">
      <div class="l-flow">
        <p>
          Round times are 2 hours 15 minutes each in total; 1 hour 40 minutes
          for gaming and 35 minutes for meeting and greeting, grabbing drinks,
          toilet breaks, rules queries, calculating and submitting scores etc.
          Each player has 50 minutes on the clock, after which it is 'dice
          down'.
        </p>
        <p>
          A relaxed atmosphere with less rushing between rounds is what we aim
          to provide our attendees, but we may bring rounds forward if running
          ahead of schedule.
        </p>
        <p>
          We will endeavour to close the event by 4.00pm on Sunday, allowing
          people to begin their journeys home.
        </p>
        <p><strong>The schedule may be adjusted on the day.</strong></p>
        <img
          src="/images/illustration--600x431.png"
          alt=""
          class="u-illustration-md"
        />
      </div>
      <div class="l-flow">
        <table class="b-table b-table--center b-table--zebra">
          <thead>
            <tr>
              <th colspan="2">Day One</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Registration</th>
              <td>09:00</td>
            </tr>
            <tr>
              <th>Briefing</th>
              <td>09:30</td>
            </tr>
            <tr>
              <th>Game One</th>
              <td>09:45</td>
            </tr>
            <tr>
              <th>Lunch</th>
              <td>12:00</td>
            </tr>
            <tr>
              <th>Game Two</th>
              <td>13:00</td>
            </tr>
            <tr>
              <th>Break</th>
              <td>15:15</td>
            </tr>
            <tr>
              <th>Game Three</th>
              <td>15:30</td>
            </tr>
            <tr>
              <th>Evening Social</th>
              <td>18:30</td>
            </tr>
          </tbody>
        </table>
        <table class="b-table b-table--center b-table--zebra">
          <thead>
            <tr>
              <th colspan="2">Day Two</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Game Four</th>
              <td>09:45</td>
            </tr>
            <tr>
              <th>Lunch</th>
              <td>12:00</td>
            </tr>
            <tr>
              <th>Game Five</th>
              <td>13:00</td>
            </tr>
            <tr>
              <th>Awards & Close</th>
              <td>15:15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </VSection>
  <Separator />
  <EditorialSection title="Location and venue" :variants="['reverse:lg']">
    <p>
      The event will be held at The Parish Hall, Holy Trinity Church, Rothwell.
      The Parish Hall has a well-stocked bar which will be open throughout the
      event.
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
        height="380"
        style="border: 0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </template>
  </EditorialSection>
  <VSection title="Accommodation" :variants="['padded', 'black']">
    [TODO]
  </VSection>
  <VSection title="Sponsorship" :variants="['padded']"> [TODO] </VSection>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TitleBanner from '~/components/TitleBanner';
  import VButton from '~/components/VButton';
  import EditorialSection from '~/components/EditorialSection';
  import VSection from '~/components/VSection';
  import Separator from '~/components/Separator';
  import IconDownload from '~/assets/images/icon-download.svg?component';
  import FeatureSection from '~/components/FeatureSection';

  export default defineComponent({
    components: {
      TitleBanner,
      VButton,
      EditorialSection,
      VSection,
      Separator,
      IconDownload,
      FeatureSection,
    },
  });
</script>

<style src="./index.css"></style>
