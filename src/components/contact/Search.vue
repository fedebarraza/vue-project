<template>
  <div class="search">
    <input
      v-model="queryText"
      type="text"
      placeholder="Buscar"
      @change="$emit('update:query', queryText)"
    />
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      queryText: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.search {
  text-align: right;
  margin-right: 10px;
}
</style>
