<template>
  <div class="message">
    <slot>No Slot Content</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";
.message {
  padding: 20px;
  margin: 5px;
  text-align: center;
  font-weight: bolder;
  color: $color-error-text;
}
</style>
