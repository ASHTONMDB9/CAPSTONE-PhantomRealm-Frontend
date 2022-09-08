<template>
<Navbar/>
  <router-view/>
  <Footer/>
</template>


<script>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  },
};
</script>


<style>
#app {
  overflow-x: hidden;
  background-color: black;
}
</style>