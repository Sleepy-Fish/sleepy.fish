<template>
  <div>
    <Splash
      src="/static/img/splash.jpg"
      loading="/static/img/splash-low.jpg"
      height="75vh"
    >
      <matter-background />
      <MessageBox title="Sorry...">
        <p class="warning-text">
          This site is under construction
        </p>
      </MessageBox>
    </Splash>
    <div class="full-width center-content">
      <lazy-background
        image-source="/static/img/parchment.png"
        loading-image="/static/img/parchment-low.png"
        image-class="content"
      >
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
      </lazy-background>
    </div>
  </div>
</template>

<script>
import MatterBackground from 'components/MatterBackground.vue'
import { MessageBox } from 'components/Boxes'
import ContentCard from 'components/ContentCard.vue'
import Splash from 'components/Splash.vue'
import LazyBackground from 'components/LazyBackground.vue'

export default {
  components: {
    MatterBackground,
    MessageBox,
    ContentCard,
    Splash,
    LazyBackground
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
    min-height:100%;
    padding: 5% 5%;
    @media only screen and (max-width: 767px) {
      padding-left: 15%;
      margin-left:-15%;
    }
  }
</style>
