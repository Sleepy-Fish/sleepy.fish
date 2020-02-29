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
            v-for="project in projects"
            :key="project.name"
            :href="project.url"
            :src="project.imageUrl"
            :title="project.name"
            :caption="project.caption"
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
  data () {
    return {
      projects: [
        {
          name: 'Bogie.JS',
          caption: 'Javascript collision library built for PIXI.JS',
          url: 'https://github.com/Sleepy-Fish/BogieJS',
          imageUrl: 'static/img/bogie.png'
        },
        {
          name: 'Frog Farts',
          caption: 'Take to the skies as a farting frog',
          url: 'https://sleepy.fish/frogfart',
          imageUrl: 'static/img/frog-farts.png'
        },
        {
          name: 'Corona',
          caption: 'Circular brick breaker. Built with Bogie.JS',
          url: 'https://sleepy.fish/corona',
          imageUrl: 'static/img/corona.png'
        },
        {
          name: 'Blips',
          caption: 'Planetary conquest for all blip-kind',
          url: 'https://blips.sleepy.fish',
          imageUrl: 'static/img/blips.png'
        },
        {
          name: 'Bonsai',
          caption: 'Watch trees grow. Enthralling!',
          url: 'https://bonsai.sleepy.fish',
          imageUrl: 'static/img/bonsai.png'
        }
      ]
    }
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
