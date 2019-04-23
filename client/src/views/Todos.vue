<template>
  <Container>
    <Row v-if="todos">
      <h1>Todos</h1>
      <div class="message" v-if="message">{{ message }}</div>
      <table>
        <tr>
          <th>
            <i class="fas fa-arrow-up" @click="descActivity"></i>
            Todo
            <i class="fas fa-arrow-down" @click="asceActivity"></i>
          </th>
          <th>
            <i class="fas fa-arrow-up" @click="descNote"></i>
            Additional info
            <i class="fas fa-arrow-down" @click="asceNote"></i>
          </th>
          <th>
            <i class="fas fa-arrow-up" @click="descDate"></i>
            Due at
            <i class="fas fa-arrow-down" @click="asceDate"></i>
          </th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-for="(todo, index) in todos" :key="index">
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
      await axios.get(`/api/todos`).then(response => {
        this.todos = response.data;
        //   console.log(response.data);
        for (let todo in this.todos) {
          // console.log(this.todos[todo].dueAt);
          let splitDate = this.todos[todo].dueAt.split("T")[0];
          this.todos[todo].dueAt = splitDate;
          //  console.log(splitDate);
        }
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    deleteTodo: async function(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      await axios.delete(`/api/todo/${id}`).then(response => {
        this.message = response.data.success;

        //Sets message to empty after 3.5secs
        setTimeout(() => {
          this.message = "";
        }, 3500);
      });
    },
    dynamicSort(property) {
      let sortOrder = 1;
      //This one if you want to sort by desc
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }

      return function(a, b) {
        if (sortOrder == -1) {
          return b[property].localeCompare(a[property]);
        } else {
          return a[property].localeCompare(b[property]);
        }
      };
    },
    asceActivity() {
      this.todos.sort(this.dynamicSort("activity"));
    },
    asceNote() {
      this.todos.sort(this.dynamicSort("note"));
    },
    asceDate() {
      this.todos.sort(this.dynamicSort("dueAt"));
    },
    descActivity() {
      this.todos.sort(this.dynamicSort("-activity"));
    },
    descNote() {
      this.todos.sort(this.dynamicSort("-note"));
    },
    descDate() {
      this.todos.sort(this.dynamicSort("-dueAt"));
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
  border: $border-primary;
}

table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;

  td,
  th {
    border: $border-primary;
    text-align: center;
    padding: 8px;

    .fa-arrow-down {
      float: right;
    }
    .fa-arrow-up {
      float: left;
    }

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
    border: $border-primary;
  }
}
</style>
