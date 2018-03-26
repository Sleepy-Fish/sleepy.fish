<style scoped>

</style>

<template>
    <p v-cloak v-if="!sleepy.loading">tech</p>
</template>

<script>
export default {
  name: 'tech',
  data: function(){
      return {
          sleepy: this.$root
      }
  }
}
</script>