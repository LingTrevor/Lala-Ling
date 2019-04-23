<template>
  <div class="row">
    <slot>No Slot Conent</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";
.row {
  width: 60%;
  margin: 20px;
  padding: 20px;
  background-color: $color-row-light;
  box-shadow: $shadow-primary;
  overflow: scroll;
}
</style>
