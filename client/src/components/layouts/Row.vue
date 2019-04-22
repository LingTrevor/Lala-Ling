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
  background-color: $color-primary-background;
  box-shadow: 1px 5px 10px $color-primary-shadow;
  overflow: scroll;
}
</style>
