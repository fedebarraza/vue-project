<template>
  <div class="icon">
    <font-awesome-icon
      class="plus-square"
      icon="address-book"
      size="2x"
    ></font-awesome-icon>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "contact-icon",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.icon {
  background-color: green;
  position: absolute;
  top: 5vh;
  margin-left: 10px;
  border-radius: 5px;

  .plus-square {
    margin: 20px;
    color: white;
  }
}
</style>
