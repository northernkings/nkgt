<template>
  <div class="main">
    <div class="main__inner">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Main'
  };
</script>

<style scoped>
  .main {
    background-color: #fff;
  }

  @media only screen and (min-width: 1000px) {
    .main {
      width: 60%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 40%;
      overflow: auto;
    }
  }

  .main__inner {
    max-width: 1000px;
    padding: 30px;
  }

  @media only screen and (min-width: 1000px) {
    .main__inner {
      padding: 50px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .main__inner {
      padding: 80px;
    }
  }
</style>
