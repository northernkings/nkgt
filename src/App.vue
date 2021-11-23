<template>
  <div id="app" class="app">
    <Header />
    <Main />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Main,
    },
  };
</script>

<style>
  @font-face {
    font-family: 'Romance Fatal';
    src: url('/assets/romance-fatal.woff2') format('woff2'),
      url('/assets/romance-fatal.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  @media only screen and (min-width: 1000px) {
    html,
    body {
      height: 100%;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
  }

  body {
    font-family: 'Times New Roman', Times, serif;
  }

  a,
  a:hover,
  a:focus,
  a:visited,
  a:active {
    color: #960000 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Romance Fatal', 'Times New Roman', Times, serif;
    text-transform: uppercase;
  }
</style>
