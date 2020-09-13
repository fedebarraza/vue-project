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
  --clr-body: #fefefe;
  --clr-bg: #eeeeee;
  --clr-green: green;
}

body {
  background-color: var(--clr-bg);
  display: flex;
  justify-content: center;
}

#main-app {
  font-family: basic-sans, sans-serif;
  color: var(--clr-primary);
  margin-top: 60px;
}

.bg-green {
  background-color: var(--clr-green);
}
</style>
