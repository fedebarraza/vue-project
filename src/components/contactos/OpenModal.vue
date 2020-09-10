<template>
  <div class="open-modal">
    <div class="new-user">New User</div>
  </div>
</template>

<script>
export default {
  name: "open-modal"
};
</script>

<style lang="scss" scoped>
.open-modal {
  background-color: green;
  position: absolute;
  top: 50px;
  margin-left: 10px;

  .new-user {
    margin: 20px 10px;
    color: white;
  }
}
</style>
