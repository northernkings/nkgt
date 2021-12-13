<template>
  <VSection title="Accommodation" :variants="['spacious', 'black', 'center:md']">
    <template v-slot:intro>
      <p>
        Ossett is a little market town within the City of Wakefield, West Yorkshire. There are
        multiple boutique hotels within walking distance but also more standard hotels only a three
        to four minute drive from the venue.
      </p>
      <p>Below are links to a few suggestions:</p>
    </template>
    <ul class="c-accommodation__list u-list-logos">
      <li>
        <a
          href="https://www.ihg.com/holidayinn/hotels/gb/en/find-hotels/hotel/rooms?qDest=Queen%27s%20Drive,%20Wakefield,%20GB&qCiMy=52022&qCiD=18&qCoMy=52022&qCoD=19&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qSlH=XWDWY&qAkamaiCC=GB&qSrt=sBR&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va.ii.sp.nd.ct.sx.we.lx&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&qpMn=0&qSHBrC=HI"
        >
          <LogoHolidayInn class="c-accommodation__logo c-accommodation__logo--holiday-inn" />
          <span class="u-sr-only">Holiday Inn</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.wyndhamhotels.com/en-uk/ramada/yorkshire-united-kingdom/ramada-wakefield/rooms-rates?brand_id=RA&checkInDate=6/18/2022&checkOutDate=6/19/2022&useWRPoints=false&children=0&adults=1&rooms=1&loc=ChIJ6XnyiLU1eUgRYIVRMAP6oMs&sessionId=1639404597"
        >
          <LogoRamada class="c-accommodation__logo c-accommodation__logo--ramada" />
          <span class="u-sr-only">Ramada</span>
        </a>
      </li>
      <li>
        <a href="https://mews-hotel.co.uk/">
          <LogoMews class="c-accommodation__logo c-accommodation__logo--mews" />
          <span class="u-sr-only">The Mews Hotel</span>
        </a>
      </li>
    </ul>
  </VSection>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VSection from "~/components/VSection";
import LogoMews from "~/assets/images/logo-mews.svg?component";
import LogoRamada from "~/assets/images/logo-ramada.svg?component";
import LogoHolidayInn from "~/assets/images/logo-holiday-inn.svg?component";

export default defineComponent({
  components: {
    VSection,
    LogoMews,
    LogoRamada,
    LogoHolidayInn,
  },
});
</script>

<style lang="postcss">
@import "~/assets/styles/resources.css";

.c-accommodation__list {
  display: flex;
  align-items: center;
  gap: var(--grid-gap);
  margin-top: var(--grid-gap);
  justify-content: center;
  max-width: none;
}

.c-accommodation__list li {
  display: block;
  margin: 0;
  padding: 0;

  &:before {
    display: none;
  }
}

.c-accommodation__logo {
  fill: currentColor;
}

.c-accommodation__logo--ramada {
  height: 70px;

  @media (--mq-md) {
    height: 90px;
  }
}

.c-accommodation__logo--holiday-inn {
  height: 100px;

  @media (--mq-md) {
    height: 120px;
  }
}

.c-accommodation__logo--mews {
  height: 90px;

  @media (--mq-md) {
    height: 110px;
  }
}
</style>
