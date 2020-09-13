<template>
  <div class="plus-icon bg-green">
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
  position: absolute;
  top: 50px;
  border-radius: 5px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);

  .plus-square {
    margin: 25px;
    color: white;
  }
}
</style>
