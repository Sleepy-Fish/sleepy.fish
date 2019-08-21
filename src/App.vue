<template>
  <div class="app-container">
    <NavBar />
    <RouterView />
  </div>
</template>

<script>
import NavBar from 'components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
html {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
