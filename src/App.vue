<template>
  <div id="app">
    <contactos></contactos>
  </div>
</template>

<script>
import Contactos from "./components/contactos/Contactos.vue";
export default {
  name: "App",
  components: {
    Contactos
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #a5a5a5;
}

body {
  background-color: #eeeeee;
}
</style>
