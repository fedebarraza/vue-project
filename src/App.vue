<template>
  <div id="app">
    <contact-page></contact-page>
  </div>
</template>

<script>
import ContactPage from "./components/contact/ContactPage.vue";
export default {
  name: "App",
  components: {
    ContactPage
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
