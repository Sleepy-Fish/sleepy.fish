<template>
  <div>
    <h3>Hello! {{ name }} is under construction at the moment.</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  h3 {
    font-family: Courier, monospace;
    color: red;
  }
</style>
