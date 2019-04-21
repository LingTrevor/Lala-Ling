<template>
  <TodoForm formTitle="Add Todo">
    <FormItems>
      <label for>Todo title</label>
      <input type="text" />
    </FormItems>
    <FormItems>
      <label for>Additional info</label>
      <input type="text" />
    </FormItems>
    <FormItems>
      <label for>Due at</label>
      <input type="date" />
    </FormItems>
    <FormBtn btnTitle="Save" />
  </TodoForm>
</template>

<script>
import TodoForm from "@/components/layouts/TodoForm";
import FormItems from "@/components/FormItems";
import FormBtn from "@/components/FormBtn";
export default {
  name: "AddTodo",
  components: {
    TodoForm,
    FormItems,
    FormBtn
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
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
</style>
