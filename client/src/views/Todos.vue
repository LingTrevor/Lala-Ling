<template>
  <Container>
    <Row v-if="todos">
      <h1>Todos</h1>
      <table>
        <tr>
          <th>Todo</th>
          <th>Additional info</th>
          <th>Due at</th>
        </tr>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.activity }}</td>
          <td>{{ todo.note }}</td>
          <td>{{ todo.dueAt }}</td>
          <td>
            <span>Delete</span>
            <span
              @click="navigateTo({ name: 'EditTodo', params: { id: todo.id } })"
              >Edit</span
            >
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
      todos: ""
    };
  },
  methods: {
    getTodos: async function() {
      const response = await axios.get(`http://localhost:5000`);
      //   console.log(response.data);
      this.todos = response.data;
    },
    navigateTo(route) {
      this.$router.push(route);
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

table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;

  td,
  th {
    border: 1px solid $color-primary-line;
    text-align: center;
    padding: 8px;

    span {
      margin: 10px;
      padding: 5px;
      border-radius: 30px;
      cursor: pointer;
    }
  }

  tr:nth-child(even) {
    background-color: $color-table-bg;
    border: 1px solid $color-primary-line;
  }
}
</style>
