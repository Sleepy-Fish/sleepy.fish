<style scoped>

</style>

<template>
    <p v-cloak v-if="!sleepy.loading">Games</p>
</template>

<script>
export default {
  name: 'games',
  data: function(){
      return {
          sleepy: this.$root
      }
  }
}
</script>