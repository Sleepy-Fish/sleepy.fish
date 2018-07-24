<style scoped>

</style>

<template>
    <div v-cloak v-if="!sleepy.loading">
        <div class="row">
            <div class="col s12 m6 l3">
                <div class="card blue lighten-4">
                    <div class="card-image">
                        <img src="img/blips.png">
                        <span class="card-title blue-text text-darken-3">Blips</span>
                        <a href="https://blips.sleepy.fish" class="btn-floating halfway-fab waves-effect waves-light blue darken-3 yellow-text text-lighten-4">></a>
                    </div>
                    <div class="card-content">
                    <p>Blips is a simple conquest game about colonizing and managing mindless blips. Spread your blips to the furthest reaches of beyond!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
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