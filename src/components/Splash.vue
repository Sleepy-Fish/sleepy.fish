<template>
  <div>
    <lazy-background
      :image-source="src"
      :loading-image="loading"
      image-class="splash"
      image-size="contain"
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
      default: window.pixels.clear
    },
    loading: {
      type: String,
      default: window.pixels.clear
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
