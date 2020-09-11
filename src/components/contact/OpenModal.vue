<template>
  <div class="open-modal">
    <font-awesome-icon
      class="new-user"
      icon="plus-square"
      size="2x"
    ></font-awesome-icon>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "open-modal",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.open-modal {
  background-color: green;
  position: absolute;
  top: 50px;
  margin-left: 10px;
  cursor: pointer;

  .new-user {
    margin: 20px;
    color: white;
  }
}
</style>
