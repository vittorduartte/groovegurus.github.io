<template>
  <div class="about-us-research-sections">
    <AboutUs />
    <Research />
  </div>
  <Footer />
</template>

<script>
import AboutUs from './components/AboutUs.vue';
import Footer from './components/Footer.vue';
import Research from './components/Research.vue';

export default {
  name: "App",
  components: {
    Footer,
    Research,
    AboutUs
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.about-us-research-sections {
  background-image: url('./assets/images/aboutus-research-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
