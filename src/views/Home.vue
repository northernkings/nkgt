<template>
  <div class="home">
    <h1 class="mb-3">
      Welcome to WOFCON&nbsp;2020
    </h1>
    <p>
      Its back and better than ever! This year we have been invited to host
      WOFCON at Mantic Games HQ in Nottingham, UK&hellip; so we couldn't
      possibly refuse.
    </p>
    <h2 class="pt-2">What is WOFCON?</h2>
    <p>
      WOFCON is a Mantic Games centric gaming event organised by the Weight of
      Fire team. A relaxed and fun atmosphere with multiple tournaments running
      over the course of a weekend.
    </p>
    <h2 class="pt-2">What's Included / Happening?</h2>
    <ul class="mb-4">
      <li>Goody bag for every attendee.</li>
      <li>Free gaming all day on the Friday until 10pm.</li>
      <li>
        Food (lunch on Saturday and Sunday and dinner Saturday night) and drink
        (soft and strong) all weekend.
      </li>
      <li>
        Sneak peeks of upcoming Mantic releases and more (trust us there is some
        great stuff, we just cant talk about it right now!).
      </li>
      <li>
        If you are hanging around in Nottingham, then some of the Weight of Fire
        crew will be doing a little gaming related tourism on the Monday if
        you'd like to join us. Fire us an email at
        <a href="mailto:hello@weightoffire.com">hello@weightoffire.com</a> to
        find out more on what we have planned.
      </li>
    </ul>
    <h2 class="pt-2">Weekend Format &amp; Schedule</h2>
    <b-list-group class="mb-4">
      <b-list-group-item>
        <strong>Friday 2pm-10pm:</strong> Free Gaming and Social
      </b-list-group-item>
      <b-list-group-item>
        <strong>Saturday 9am-5pm:</strong> Deadzone UK National Tournament
      </b-list-group-item>
      <b-list-group-item>
        <strong>Saturday 6pm-11pm:</strong> Dreadball Tournament
      </b-list-group-item>
      <b-list-group-item>
        <strong>Sunday 9am-5pm:</strong> Kings of War Vanguard Tournament
      </b-list-group-item>
    </b-list-group>
    <h2 class="pt-2">Tickets</h2>
    <b-list-group class="mb-4">
      <b-list-group-item>
        <strong>Full Weekend Pass</strong> (Saturday AND Sunday)
        <a class="buy-btn" href="https://paypal.me/weightoffire/35">
          &pound;35 - Buy Now
        </a>
      </b-list-group-item>
      <b-list-group-item>
        <strong>Day Pass</strong> (Saturday OR Sunday)
        <a class="buy-btn" href="https://paypal.me/weightoffire/25">
          &pound;25 - Buy Now
        </a>
      </b-list-group-item>
      <b-list-group-item>
        <strong>Dreadball Tournament</strong> (Saturday Evening)
        <a class="buy-btn" href="https://paypal.me/weightoffire/15">
          &pound;15 - Buy Now
        </a>
      </b-list-group-item>
    </b-list-group>

    <h2 class="pt-2">Sponsors</h2>
    <p>
      Prize support is made possible by our amazing sponsors. Please take a
      minute to check out their websites:
    </p>

    <ul class="sponsors">
      <li class="sponsors__sponsor sponsors__sponsor--mantic">
        <a href="https://www.manticgames.com/">
          <img src="/assets/logo-mantic.png" alt="Mantic" width="100" loading="lazy" />
        </a>
      </li>
      <li class="sponsors__sponsor sponsors__sponsor--deepcutstudios">
        <a href="https://www.deepcutstudio.com/">
          <img src="/assets/logo-deepcutstudios.png" alt="Deep Cut Studios" width="100" loading="lazy" />
        </a>
      </li>
      <li class="sponsors__sponsor sponsors__sponsor--gamemateu">
        <a href="https://www.gamemat.eu/">
          <img src="/assets/logo-gamemateu.png" alt="Gamemat.eu" width="100" loading="lazy" />
        </a>
      </li>
      <li class="sponsors__sponsor sponsors__sponsor--krmulticase">
        <a href="https://krmulticase.com/">
          <img src="/assets/logo-krmulticase.png" alt="KR Multicase" width="100" loading="lazy" />
        </a>
      </li>
      <li class="sponsors__sponsor sponsors__sponsor--kromlech">
        <a href="https://www.kromlech.eu/">
          <img src="/assets/logo-kromlech.png" alt="Kromlech" width="100" loading="lazy" s/>
        </a>
      </li>
    </ul>
    <p>
      If you would like to sponsor our event, please get in touch:
      <a href="mailto:hello@weightoffire.com">hello@weightoffire.com</a>
    </p>

    <h2 class="pt-2">Venue &amp; Directions</h2>
    <p>The event will be held at:</p>
    <p>
      Mantic Games <br />
      193 Hempshill Ln <br />
      Bulwell <br />
      Nottingham <br />
      NG6 8PF
    </p>
    <p>
      In the event of getting lost or delayed please contact us via our Facebook
      page.
    </p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.2669100691787!2d-1.2080566841746883!3d52.997584979907536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879eb7cac78873b%3A0x1fe8fe78e0bbc95e!2sMantic%20Games!5e0!3m2!1sen!2suk!4v1582669220643!5m2!1sen!2suk"
      width="100%"
      height="280"
      frameborder="0"
      style="border:0"
      allowfullscreen
      class="mb-4"
      title="Google map to Mantic HQ"
    ></iframe>

    <div class="disclaimer">
      <h4>Disclaimer</h4>
      <small>
        Any event/tournament information may be subject to changes up to one
        week before the event.
      </small>
      <br />
      <small>
        Refunds will only be given up to two weeks before the event.
      </small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    metaInfo: {
      title: 'Northern Kings GT 2021 - A Kings of War Event',
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'Northern Kings GT 2021 is a Kings of War event being held from 28th-29th May 2021'
        },
        {
          property: 'og:url',
          content: 'https://wofcon2020.weightoffire.com/'
        },
        { property: 'og:title', content: 'Welcome to Northern Kings GT 2021' },
        { property: 'og:site_name', content: 'Northern Kings GT 2021' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content: 'https://wofcon2020.weightoffire.com/wofcon2020-ograph.jpg'
        },
        {
          property: 'og:description',
          content:
            'A Kings of War event being held from 28th-29th May 2021'
        }
      ]
    },
    mounted() {
      if (this.$route.query.code) {
        this.$router.push({
          name: 'registration',
          query: this.$route.query
        });
      }
    }
  };
</script>

<style scoped>
  .buy-btn {
    display: block;
    margin-top: 5px;
  }
  @media only screen and (min-width: 750px) {
    .buy-btn {
      float: right;
      margin-top: 0;
    }
  }

  .sponsors {
    list-style: none;
    margin: 0 auto 30xp;
    padding: 0;
    overflow: hidden;
    text-align: center;
  }

  .sponsors__sponsor {
    margin: 0;
    padding: 0 15px 0 15px;
    max-width: 45%;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    margin-bottom: 15px;
  }

  .sponsors__sponsor:first-child {
    padding-left: 0;
  }

  .sponsors__sponsor img {
    max-width: 100%;
    height: auto;
    width: auto;
    max-height: 150px;
  }

  .sponsors__sponsor--deepcutstudios img {
    max-height: 90px;
  }

  .sponsors__sponsor--gamemateu img {
    max-height: 110px;
  }

  .sponsors__sponsor--krmulticase img {
    max-height: 110px;
  }

  .sponsors__sponsor--kromlech img {
    max-height: 120px;
  }
</style>
