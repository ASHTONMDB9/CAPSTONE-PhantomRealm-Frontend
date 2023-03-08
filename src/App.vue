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
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 50px;
  background: black;
  border: 1px solid red;
}
::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: red; 
  border: 1px solid black;
}

</style>