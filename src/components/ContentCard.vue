<template>
  <div :class="`col col-md-${width}`">
    <a :href="href">
      <div class="card">
        <h3 class="card-title">
          {{ title }}
        </h3>
        <p
          v-if="caption"
          class="card-caption"
        >
          {{ caption }}
        </p>
        <div class="img-wrapper">
          <img :src="src">
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'https://via.placeholder.com/150x100'
    },
    title: {
      type: String,
      default: 'Untitled'
    },
    caption: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: '#'
    },
    width: {
      type: String,
      default: '4'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  .card-caption {
    color: $color-gray-400;
  }
  .img-wrapper {
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    img {
      position: relative;
      width: 100%;
      max-height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }
}
</style>
