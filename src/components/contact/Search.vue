<template>
  <div class="control-form search">
    <input type="text" placeholder="Buscar" v-model="query" />
    <font-awesome-icon icon="search"></font-awesome-icon>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "search",
  components: {
    FontAwesomeIcon
  },
  watch: {},
  data() {
    return {
      query: ""
    };
  },
  watch: {
    query: function() {
      this.$emit("search", this.query);
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 220px;
  border-bottom: 1px solid black;
  padding: 10px 0;
  margin: 0 10px 0 auto;
  display: flex;
  justify-content: space-between;

  input[type="text"],
  input[type="text"]:focus {
    border: none;
    outline: none;
  }
}
</style>
