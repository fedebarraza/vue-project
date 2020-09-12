<template>
  <div class="plus-icon">
    <font-awesome-icon
      class="plus-square"
      icon="plus-square"
      size="2x"
    ></font-awesome-icon>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "plus-icon",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.plus-icon {
  background-color: green;
  position: absolute;
  top: 50px;
  border-radius: 5px;

  .plus-square {
    margin: 20px;
    color: white;
  }
}
</style>
