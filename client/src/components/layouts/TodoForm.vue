<template>
  <Container>
    <Row>
      <h1>{{ formTitle }}</h1>
      <div class="form-group">
        <slot>No slot content</slot>
      </div>
    </Row>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container";
import Row from "@/components/layouts/Row";
export default {
  name: "TodoForm",
  components: {
    Container,
    Row
  },
  props: {
    formTitle: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";
h1 {
  text-align: center;
  color: $color-primary-text;
  padding: 5px;
  margin-bottom: 20px;
}

.form-group {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
}
</style>
