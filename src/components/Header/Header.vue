<template>
  <header class="c-header">
    <div class="c-header__presents">
      <span class="c-header__presents-label">The</span>
      <NorthernKingsLogo class="c-header__presents-logo" />
      <span class="c-header__presents-label">Present</span>
    </div>
    <div class="c-header__main">
      <div class="c-header__logo">
        <div class="c-header__logo__smoke"></div>
        <svg class="c-header__logo__smoke-template" aria-hidden="true">
          <filter id="smoke-wave">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.009"
              numOctaves="5"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="30s"
                values="0.02;0.005;0.02"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
        </svg>
        <Logo class="c-header__logo__image" />
      </div>
      <p class="c-header__date">
        Rothwell, Leeds. <span>May 14th and 15th</span>
      </p>
      <p class="c-header__strapline">
        <img
          class="c-header__game"
          src="../../assets/images/kings-of-war-logo.png"
          alt="Kings of War"
        />
        Clash of Kings UK North Qualifier
      </p>
    </div>
    <div class="c-header__book-now">
      <Button
        class="c-header__book-now__sm"
        href="/"
        :variants="['sm', 'decorative', 'ghost', 'invert']"
      >
        Book your place
      </Button>
      <Button
        class="c-header__book-now__lg"
        href="/"
        :variants="['lg', 'decorative', 'ghost', 'invert']"
      >
        Book your place
      </Button>
    </div>
    <!-- 
    <div class="c-header__scroll-animated">
      <span class="u-sr-only">Scroll for more information</span>
    </div> 
    -->
    <div class="c-header__scroll">
      <span>Scroll to find out more</span>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Logo from '~/assets/images/nkgt-2022-logo.svg?component';
  import NorthernKingsLogo from '~/assets/images/nk-logo-vertical.svg?component';
  import Button from '~/components/Button';

  export default defineComponent({
    components: {
      Logo,
      NorthernKingsLogo,
      Button,
    },
  });
</script>

<style lang="postcss">
  @import '~/assets/styles/resources.css';

  .c-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-black);
    background-image: url('../../assets/images/header-bg--sm.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 75%;
    color: var(--color-white);
    height: 90vh;
    height: 90dvh;
    min-height: 550px;
    position: relative;
    overflow: hidden;

    @media (--mq-md) {
      min-height: 768px;
      background-image: url('../../assets/images/header-bg--lg.jpg');
    }
  }

  .c-header__presents {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-x-1);
    position: absolute;
    top: var(--space-y-2);
    left: var(--space-x-2);

    @media (--mq-md) {
      top: var(--space-y-5);
      left: var(--space-x-5);
      gap: var(--space-x-3);
    }
  }

  .c-header__presents-logo {
    height: 38px;
    fill: var(--color-white);

    @media (--mq-md) {
      height: 68px;
    }
  }

  .c-header__presents-label {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-7);
    letter-spacing: 1px;
    margin-bottom: calc(var(--space-y-2) * -1);

    @media (--mq-md) {
      font-size: var(--font-size-4);
      letter-spacing: 2px;
    }
  }

  .c-header__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 var(--space-x-4);
  }

  .c-header__logo {
    position: relative;
  }

  .c-header__logo__smoke {
    --smoke: rgba(29, 23, 12, 0.5);

    position: absolute;
    top: 47%;
    left: 48%;
    transform: translate(-50%, -50%);
    width: calc(100% + 150px);
    height: calc(100% + 150px);
    filter: url(#smoke-wave);
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: 85px;
      left: 85px;
      right: 85px;
      bottom: 85px;
      border: 25px solid var(--smoke);
      border-radius: 50%;
      box-shadow: 0 0 50px var(--smoke), inset 0 0 50px var(--smoke);
      filter: url(#smoke-wave) blur(10px);

      @media (--mq-md) {
        top: 100px;
        left: 100px;
        right: 100px;
        bottom: 100px;
        border: 50px solid var(--smoke);
      }
    }
  }

  .c-header__logo__smoke-template {
    display: none;
  }

  .c-header__logo__image {
    fill: var(--color-white);
    width: 70vw;
    max-width: 260px;
    display: block;
    z-index: 2;
    position: relative;

    @media (--mq-md) {
      max-width: 460px;
    }

    @media (--mq-md) and (max-height: 768px) {
      max-width: 360px;
    }
  }

  .c-header .nkgt-logo {
    position: relative;
  }

  .c-header .nkgt-logo__thorns {
    transform-origin: center;
    transform-box: fill-box;
    animation: rotate-thorns 120s linear infinite;
  }

  @keyframes rotate-thorns {
    0% {
      transform: rotate(0deg) translate(0, 0);
    }
    100% {
      transform: rotate(360deg) translate(0, 0);
    }
  }

  .c-header__strapline {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-6);
    letter-spacing: 1px;
    margin-top: var(--space-x-10);

    @media (--mq-md) {
      font-size: var(--font-size-4);
      letter-spacing: 2px;
    }
  }

  .c-header__date {
    margin-top: var(--space-x-5);
    font-family: var(--font-family-heading);
    font-size: var(--font-size-3);
    letter-spacing: 2px;
    position: relative;
    z-index: 2;

    @media (--mq-md) {
      font-size: var(--font-size-2);
      letter-spacing: 2px;
    }

    span {
      display: inline-block;
    }
  }

  .c-header__game {
    height: 25px;
    width: auto;
    margin: 0 auto var(--space-y-1);
  }

  .c-header__book-now {
    position: absolute;
    top: var(--space-y-2);
    right: var(--space-x-2);

    @media (--mq-md) {
      top: var(--space-y-5);
      right: var(--space-x-5);
    }
  }

  .c-header__book-now__sm {
    @media (--mq-md) {
      display: none;
    }
  }

  .c-header__book-now__lg {
    display: none;

    @media (--mq-md) {
      display: block;
    }
  }

  /* 
  .c-header__scroll-animated {
    left: 50%;
    position: absolute;
    text-align: center;
    bottom: var(--space-y-5);
    transform: translate(-50%, -50%);
    border: 2px solid var(--color-white);
    border-radius: 30px;
    height: 46px;
    text-align: center;
    width: 30px;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      position: absolute;
      top: 15px;
      left: 50%;
      margin-left: -2px;
      border-radius: 2px;
      background-color: var(--color-white);
      animation-duration: 1.5s;
      animation-name: scrolldown;
      animation-iteration-count: infinite;
    }

    &::after {
      animation-delay: 0.75s;
    }
  }

  @keyframes scrolldown {
    0% {
      opacity: 0;
      transform: translate(0, -8px);
    }
    50% {
      opacity: 1;
      transform: translate(0, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 8px);
    }
  } 
  */

  .c-header__scroll {
    left: 50%;
    position: absolute;
    bottom: var(--space-x-6);
    transform: translateX(-50%);
    text-align: center;
    font-size: var(--font-size-7);
    font-style: italic;
    line-height: var(--space-x-10);

    @media (--mq-md) {
      font-size: var(--font-size-5);
      bottom: var(--space-x-10);
    }

    &::after {
      content: '';
      display: block;
      width: 1px;
      height: var(--space-x-6);
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--color-white);

      @media (--mq-md) {
        height: var(--space-x-10);
      }
    }
  }
</style>
