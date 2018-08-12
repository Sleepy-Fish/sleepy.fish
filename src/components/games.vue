<style scoped>

</style>

<template>
    <div v-cloak v-if="!sleepy.loading">
        <div class="row">
            <div class="col s12 m6 l3" v-for="(game, index) in games" :key="index">
                <div class="card blue lighten-4">
                    <div class="card-image">
                        <img :src="game.img">
                        <a :href="game.git" class="blue-text text-darken-2 right" style="position:absolute;top:10px;right:10px;"><i class="material-icons">code</i></a>
                        <span class="card-title blue-text text-darken-3">{{game.name}}</span>
                        <a :href="game.url" class="btn-floating halfway-fab waves-effect waves-light blue darken-3"><i class="material-icons">play_arrow</i></a>
                    </div>
                    <div class="card-content">
                    <p>{{game.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function(){
      return {
          sleepy: this.$root,
          games: [
              {
                  name:"Blips",
                  img:"img/blips.png",
                  git:"https://github.com/Sleepy-Fish/blips",
                  url:"https://blips.sleepy.fish",
                  description:"Blips is a simple conquest game about colonizing and managing mindless blips. Spread your blips to the furthest reaches of beyond!",
              },
              {
                  name:"Mage Wars",
                  img:"img/mages.png",
                  git:"https://github.com/Sleepy-Fish/mage-wars",
                  url:"https://mages.sleepy.fish",
                  description:"A top down online PvP combat arena game! Fire spells at your enemies while dodging theirs in bullet hell type combat. Join your friends in competetive combat arena (Multiplayer and magic coming soon)",
              },
          ]
      }
  }
}
</script>