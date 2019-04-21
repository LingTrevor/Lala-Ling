<template>
  <TodoForm formTitle="Edit Todo">
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
    <div class="form-btn">
      <button class="submit-btn">Save</button>
    </div>
    <div @click="getId">fsdfsdf {{ todoId }}</div>
  </TodoForm>
</template>

<script>
import TodoForm from "@/components/layouts/TodoForm";
export default {
  name: "AddForm",
  components: {
    TodoForm
  },
  data() {
    return {
      todoId: ""
    };
  },
  methods: {
    getId() {
      this.todoId = this.$route.params.id;
      console.log(this.todoId);
    }
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

.form-btn {
  display: flex;
  justify-content: center;
  padding: 10px;

  .submit-btn {
    width: 20%;
    line-height: 20px;
    font-size: 18px;
    padding: 10px;
    margin: 10px 10px 0 10px;
    cursor: pointer;
    color: $color-white-text;
    background-color: $color-primary;
  }
}
</style>
