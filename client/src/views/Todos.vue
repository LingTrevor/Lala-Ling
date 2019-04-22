<template>
  <Container>
    <Row v-if="todos">
      <h1>Todos</h1>
      <div class="message" v-if="message">{{ message }}</div>
      <table>
        <tr>
          <th>Todo</th>
          <th>Additional info</th>
          <th>Due at</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.activity }}</td>
          <td>{{ todo.note }}</td>
          <td>{{ todo.dueAt }}</td>
          <td>
            <i
              @click="navigateTo({ name: 'EditTodo', params: { id: todo.id } })"
              class="fas fa-edit"
            ></i>
          </td>
          <td>
            <i class="fas fa-trash" @click="deleteTodo(todo.id)"></i>
          </td>
        </tr>
      </table>
    </Row>

    <Row v-else>
      <h1>Loading...</h1>
    </Row>
  </Container>
</template>

<script>
import axios from "axios";
import Container from "@/components/layouts/Container";
import Row from "@/components/layouts/Row";
export default {
  name: "Todos",
  components: {
    Container,
    Row
  },
  data() {
    return {
      todos: "",
      message: ""
    };
  },
  methods: {
    getTodos: async function() {
      await axios.get(`http://localhost:5000/api/todos`).then(response => {
        this.todos = response.data;
        //   console.log(response.data);
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    deleteTodo: async function(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      await axios
        .delete(`http://localhost:5000/api/todo/${id}`)
        .then(response => {
          this.message = response.data.success;

          //Sets message to empty after 3.5secs
          setTimeout(() => {
            this.message = "";
          }, 3500);
        });
    }
  },
  created() {
    this.getTodos();
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
h1 {
  text-align: center;
  color: $color-primary-text;
  padding: 5px;
  margin-bottom: 20px;
}

.message {
  padding: 20px;
  margin: 5px;
  text-align: center;
  font-weight: bolder;
  color: $color-primary-text;
  border: 1px solid $color-primary-line;
}

table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;

  td,
  th {
    border: 1px solid $color-primary-line;
    text-align: center;
    padding: 8px;

    i {
      cursor: pointer;

      &:hover {
        transform: scale(1.4);
        color: $color-primary;
      }
    }
  }

  tr:nth-child(even) {
    background-color: $color-table-bg;
    border: 1px solid $color-primary-line;
  }
}
</style>
