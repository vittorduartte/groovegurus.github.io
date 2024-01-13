<template>
  <Hero />
  <div class="about-us-research-sections">
    <AboutUs />
    <Research />
  </div>
  <GuruPass />
  <Footer />
</template>

<script>
import Hero from './components/Hero.vue';
import AboutUs from './components/AboutUs.vue';
import Research from './components/Research.vue';
import Footer from './components/Footer.vue';
import GuruPass from './components/GuruPass.vue';

export default {
  name: "App",
  components: {
    Hero,
    AboutUs,
    Research,
    GuruPass,
    Footer
  },
};
</script>

<style>
.about-us-research-sections {
  background-image: url('./assets/images/aboutus-research-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
