<template>
  <TodoForm formTitle="Edit Todo">
    <ErrMessage v-if="message">{{ message }}</ErrMessage>
    <form @submit.prevent="editTodo">
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
        <input type="date" v-model="todoDue" />
      </FormItems>
      <FormBtn btnTitle="Save" />
    </form>
  </TodoForm>
</template>

<script>
import axios from "axios";
import TodoForm from "@/components/layouts/TodoForm";
import ErrMessage from "@/components/layouts/ErrMessage";
import FormItems from "@/components/FormItems";
import FormBtn from "@/components/FormBtn";
export default {
  name: "EditTodo",
  components: {
    TodoForm,
    ErrMessage,
    FormItems,
    FormBtn
  },
  data() {
    return {
      todoId: "",
      todo: "",
      todoTitle: "",
      todoNote: "",
      todoDue: "",
      message: ""
    };
  },
  methods: {
    getTodo: async function(id) {
      await axios.get(`/api/todo/${id}`).then(response => {
        this.todo = response.data;
        this.todoTitle = this.todo.activity;
        this.todoNote = this.todo.note;
        this.todoDue = this.todo.dueAt.split("T")[0];
      });
    },
    editTodo: async function() {
      const updatedTodo = {
        id: this.todo.id,
        title: this.todoTitle,
        note: this.todoNote,
        dueAt: this.todoDue,
        createdAt: this.todo.createdAt
      };
      await axios
        .put(`/api/todo`, {
          updatedTodo
        })
        .then(response => {
          if (response.status === 200) {
            this.$router.push({ path: "/" });
          }
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.message = err.response.data;
          }
        });
    }
  },
  created() {
    this.todoId = this.$route.params.id;
    this.getTodo(this.todoId);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
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
  border: $border-primary;

  &:focus {
    outline: none;
    box-shadow: $shadow-input;
  }
}
</style>
