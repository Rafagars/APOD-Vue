<template>
  <div id="app">
    <Header />
    <APOD />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import APOD from './components/APOD.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    APOD,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
body{
  background-image: url('assets/bg.jpg');
}
</style>
