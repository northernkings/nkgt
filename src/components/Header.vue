<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <a href="/">
          <img
            src="/assets/nk-gt-logo.png"
            alt="Northern Kings - Grand Tournament 2021"
            width="300"
            height="300"
          />
        </a>
      </div>
      <p class="header__subtitle">
        28th and 29th May 2021
      </p>
      <p class="header__address">
        TBD
      </p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  };
</script>

<style scoped>
  .header {
    background-color: #000;
    background-image: url('/assets/bg--mobile.jpg');
    background-size: cover;
    background-position: 50% 50%;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  @media only screen and (min-width: 1000px) {
    .header {
      width: 40%;
      height: 100vh;
      background-image: url('../assets/bg--desktop.jpg');
      position: fixed;
      top: 0;
      left: 0;
    }
  }

  .header__inner {
    max-width: 300px;
  }

  .header__subtitle {
    text-align: center;
    padding-top: 20px;
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    font-family: 'Romance Fatal', 'Times New Roman', Times, serif;
  }

  @media only screen and (min-width: 750px) {
    .header__subtitle {
      font-size: 24px;
    }
  }

  .header__subtitle span {
    text-transform: lowercase;
  }

  .header__address {
    margin: 5px 0 0;
  }

  .header__logo img {
    max-width: 125px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  @media only screen and (min-width: 750px) {
    .header__logo img {
      max-width: 175px;
    }
  }

  @media only screen and (min-width: 1000px) {
    .header__logo img {
      max-width: 300px;
    }
  }
</style>
