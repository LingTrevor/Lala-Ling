<template>
  <header>
    <nav class="nav">
      <router-link class="nav-link" to="/">Todos</router-link>
      <router-link class="nav-link" to="/todo/add">Add Todo</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
header {
  border-bottom: 1px solid $color-primary-shadow;

  .nav {
    display: flex;
    justify-content: space-around;
    margin-right: 20px;

    .nav-link {
      display: flex;
      justify-content: space-around;
      margin: 20px;
      padding: 5px;
      font-weight: bold;
      cursor: pointer;
      color: $color-primary-text;
      text-decoration: none;
    }
  }
}
</style>
