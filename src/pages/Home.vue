<template>
  <div>
    <Splash
      src="/static/img/splash.jpg"
      height="75vh"
    />
    <MessageBox title="Sorry...">
      <p class="warning-text">
        This site is under construction
      </p>
      <small>Some artwork is temporarily being borrowed...</small>
    </MessageBox>
    <div class="full-width center-content">
      <div class="content">
        <div class="row">
          <ContentCard
            src="https://via.placeholder.com/150x100"
            title="Placeholder"
            width="4"
          />
          <ContentCard
            src="https://via.placeholder.com/150x100"
            title="Placeholder"
            width="3"
          />
          <ContentCard
            src="https://via.placeholder.com/150x100"
            title="Placeholder"
            width="5"
          />
          <ContentCard
            src="https://via.placeholder.com/150x100"
            title="Placeholder"
            width="5"
          />
          <ContentCard
            src="https://via.placeholder.com/150x100"
            title="Placeholder"
            width="3"
          />
          <ContentCard
            src="https://via.placeholder.com/150x100"
            title="Placeholder"
            width="4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Splash from 'components/Splash.vue'
import { MessageBox } from 'components/Boxes'
import ContentCard from 'components/ContentCard.vue'

export default {
  components: {
    Splash,
    MessageBox,
    ContentCard
  },
  methods: {
    test (val) {
      console.log(`Confirmed: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .center-content {
    background-color: $transparent-bg;
    height: 900px;
    padding-top: 3vh
  }
  .content {
    background-image: url("/static/img/parchment.png");
    background-size: cover;
    min-height:100%;
    padding: 5% 5%;
    @media only screen and (max-width: 767px) {
      padding-left: 15%;
      margin-left:-15%;
    }
  }
</style>
