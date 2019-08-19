<template>
  <div class="app-container">
    <NavBar />
    <div class="container center-content">
      <RouterView />
    </div>
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
  .app-container {
    font-family: Courier, monospace;
  }
  .container {
    max-width: 1200px;
  }
</style>
