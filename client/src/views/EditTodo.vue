<template>
  <TodoForm formTitle="Edit Todo">
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
        <input type="date" />
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
  name: "EditTodo",
  components: {
    TodoForm,
    FormItems,
    FormBtn
  },
  data() {
    return {
      todoId: "",
      todo: "",
      todoTitle: "",
      todoNote: "",
      todoDue: ""
    };
  },
  methods: {
    getTodo: async function(id) {
      await axios.get(`http://localhost:5000/api/todo/${id}`).then(response => {
        this.todo = response.data;
        this.todoTitle = this.todo.activity;
        this.todoNote = this.todo.note;
        this.todoDue = this.todo.dueAt;
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
        .put(`http://localhost:5000/api/todo`, {
          updatedTodo
        })
        .then(response => {
          if (response.status === 200) {
            this.$router.push({ path: "/" });
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
