<template>
  <div>
    <lazy-background
      image-source="/static/img/splash.jpg"
      loading-image="/static/img/splash-low.jpg"
      image-class="splash"
      background-size="cover"
    >
      <slot />
    </lazy-background>
    <div
      class="splash-spacer"
      :style="{ height: height }"
    />
  </div>
</template>

<script>
import LazyBackground from 'components/LazyBackground.vue'

export default {
  components: {
    LazyBackground
  },
  props: {
    src: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style lang="scss" scoped>
.splash {
  position: absolute;
  background-color: $color-gray-900;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 90vh;
}
.splash-spacer {
  margin-top: -60px;
}
</style>
