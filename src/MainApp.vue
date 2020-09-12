<template>
  <div id="main-app">
    <contact-page></contact-page>
  </div>
</template>

<script>
import ContactPage from "./components/contact/ContactPage.vue";
export default {
  name: "MainApp",
  components: {
    ContactPage
  }
};
</script>

<style>
:root {
  --clr-primary: #333;
  --clr-bg: #eeeeee;
}

body {
  background-color: var(--clr-bg);
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

#main-app {
  font-family: basic-sans, sans-serif;
  color: var(--clr-primary);
  margin-top: 60px;
}
</style>
