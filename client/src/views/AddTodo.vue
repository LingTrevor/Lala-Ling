<template>
  <TodoForm formTitle="Add Todo">
    <div class="form-items">
      <label for>Todo title</label>
      <input type="text" />
    </div>
    <div class="form-items">
      <label for>Additional info</label>
      <input type="text" />
    </div>
    <div class="form-items">
      <label for>Due at</label>
      <input type="date" />
    </div>
    <FormBtn btnTitle="Save" />
  </TodoForm>
</template>

<script>
import TodoForm from "@/components/layouts/TodoForm";
import FormBtn from "@/components/FormBtn";
export default {
  name: "AddForm",
  components: {
    TodoForm,
    FormBtn
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.form-items {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: block;
  margin-bottom: 10px;

  label {
    display: block;
    margin: 5px 0;
    line-height: 20px;
    color: $color-primary-text;
  }

  input {
    display: block;
    width: 100%;
    line-height: 20px;
    font-size: 18px;
    padding: 5px;
    color: $color-primary-text;
    box-sizing: border-box;
  }
}
</style>
