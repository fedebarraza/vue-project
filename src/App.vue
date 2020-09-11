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
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  color: #a5a5a5;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

body {
  background-color: #eeeeee;
}
</style>
