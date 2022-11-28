<template>
  <VSection title="Schedule" :variants="['padded']">
    <div class="l-grid l-grid--cols-2:md">
      <div class="l-flow">
        <p>
          Round times are 2 hours 15 minutes each in total; a maximum 2 hours for gaming and 15
          minutes for greetings, grabbing drinks, toilet breaks, rules queries,
          calculating and submitting scores etc. Each player has 60 minutes on the clock, after
          which it is 'dice down'.
        </p>
        <p>
          A relaxed atmosphere with less rushing between rounds is what we aim to provide our
          attendees, but we may bring rounds forward if running ahead of schedule.
        </p>
        <p>
          We will endeavour to close the event by 4.00pm on Sunday, allowing people to begin their
          journeys home.
        </p>
        <p><strong>The schedule may be adjusted on the day.</strong></p>
        <img src="/images/illustration--600x431.png" alt="" class="u-illustration-md" />
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
              <td>19:00</td>
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
