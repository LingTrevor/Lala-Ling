<template>
  <TodoForm formTitle="Add Todo">
    <form @submit.prevent="addTodo">
      <FormItems>
        <label for>Todo title</label>
        <input type="text" v-model="todoTitle" />
      </FormItems>
      <FormItems>
        <label for>Additional info</label>
        <input type="text" v-model="todoNote" />
      </FormItems>
      <FormItems>
        <label for>Due at</label>
        <input type="date" v-model="dueAt" />
      </FormItems>
      <FormBtn btnTitle="Save" />
    </form>
  </TodoForm>
</template>

<script>
import axios from "axios";
import TodoForm from "@/components/layouts/TodoForm";
import FormItems from "@/components/FormItems";
import FormBtn from "@/components/FormBtn";
export default {
  name: "AddTodo",
  components: {
    TodoForm,
    FormItems,
    FormBtn
  },
  data() {
    return {
      todoTitle: "",
      todoNote: "",
      dueAt: ""
    };
  },
  methods: {
    addTodo: async function() {
      const todo = {
        title: this.todoTitle,
        note: this.todoNote,
        dueAt: this.dueAt
      };
      await axios
        .post(`http://localhost:5000/api/todo/add`, {
          todo
        })
        .then(response => {
          if (response.status === 200) {
            this.$router.push({ path: "/" });
          }
        });
    }
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
  border: 1px solid $color-primary-line;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 10px $color-primary-shadow;
  }
}
</style>
