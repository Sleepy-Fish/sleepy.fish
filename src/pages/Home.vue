<template>
  <div>
    <Splash />
    <div id="splash-spacer" />
    <div class="full-width center-content">
      <div class="content">
        <div class="row">
          <ContentCard src="/static/img/frog-farts.png" width=4 />
          <ContentCard src="/static/img/frog-farts.png" width=5 />
          <ContentCard src="/static/img/frog-farts.png" width=3 />
          <ContentCard src="/static/img/frog-farts.png" width=5 />
          <ContentCard src="/static/img/frog-farts.png" width=3 />
          <ContentCard src="/static/img/frog-farts.png" width=4 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Splash from 'components/Home/Splash'
import ContentCard from 'components/Home/ContentCard.vue'

export default {
  components: {
    Splash,
    ContentCard
  }
}
</script>

<style lang="scss" scoped>
  #splash-spacer {
    margin-top: -60px;
    height: 75vh;
  }
  .center-content {
    background-color: rgba(0,0,0,0.4);
    height: 900px;
    padding-top: 3vh
  }
  .content {
    background-image: url("/static/img/parchment.png");
    background-size: cover;
    min-height:100%;
    padding: 1% 5%;
    @media only screen and (max-width: 767px) {
      padding-left: 15%;
      padding-right: 1%;
    }
  }
</style>
