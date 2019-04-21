<template>
  <div class="form-btn">
    <button class="submit-btn">{{ btnTitle }}</button>
  </div>
</template>

<script>
export default {
  props: {
    btnTitle: String
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.form-btn {
  display: flex;
  justify-content: center;
  padding: 10px;

  .submit-btn {
    width: 150px;
    line-height: 20px;
    font-size: 18px;
    padding: 10px;
    margin: 10px 10px 0 10px;
    cursor: pointer;
    color: $color-white-text;
    background-color: $color-primary;

    &:focus {
      outline: none;
    }

    &:hover{
      background-color: $color-primary-background;
      color: $color-primary-text;
      transform: scale(1.1);
      border: 1px solid $color-primary;
    }
  }
}
</style>
