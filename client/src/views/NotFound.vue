<template>
  <Container>
    <Row>
      <h1>Error 404 - Not Found</h1>
    </Row>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container";
import Row from "@/components/layouts/Row";
export default {
  name: "NotFound",
  components: {
    Container,
    Row
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
</style>
