<template>
  <div class="app-container">
    <NavBar />
    <RouterView />
  </div>
</template>

<script>
import NavBar from 'components/Common/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
  body {
    background-color: black !important;
  }
  .app-container {
    font-family: Courier, monospace;
  }
  .container {
    max-width: 1200px;
  }
</style>
