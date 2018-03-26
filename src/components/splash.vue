<style scoped>

</style>

<template>
    <!-- Auth Landing Page -->
    <div v-cloak v-if="sleepy.loggedIn && !sleepy.loading" class="container">
        <br><br>
        <h1 class="header center">Welcome!</h1>
        <div class="center-align">
        <img width="128" class="circle" :src="sleepy.user.picture"/>
        </div>
        <div class="row center">
        <h5 class="header col s12 light">You are logged in as {{ sleepy.user.given_name }}</h5>
        </div>
        <br><br>
    </div>

    <!-- Non-Auth Landing Page -->
    <div v-cloak v-else-if="!sleepy.loading" class="container">
        <br><br>
        <h1 class="header center">Sleepy Fish</h1>
        <div class="row center">
        <h5 class="header col s12 light">A productless brand for web tech and games</h5>
        </div>
        <div class="row center">
        <a @click="sleepy.login" id="login-button" class="btn-large waves-effect waves-light">Login</a>
        </div>
        <br><br>
    </div>
</template>

<script>
export default {
  name: 'spash',
  data: function(){
      return {
          sleepy: this.$root
      }
  }
}
</script>