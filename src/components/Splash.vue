<template>
  <div>
    <div
      id="splash"
      :style="{ backgroundImage: src ? `url('${src}')` : null }"
    >
      <slot />
    </div>
    <div
      id="splash-spacer"
      :style="{ height: height }"
    />
  </div>
</template>

<script>
export default {
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
#splash {
  position: absolute;
  background-color: $color-gray-900;
  background-size: cover;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 90vh;
}
#splash-spacer {
  margin-top: -60px;
}
</style>
