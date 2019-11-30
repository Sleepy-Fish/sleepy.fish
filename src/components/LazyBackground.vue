<template>
  <div
    :class="[imageClass, imageState, 'lazy-bg']"
    :style="computedStyle"
    :data-width="imageWidth"
    :data-height="imageHeight"
    :data-state="imageState"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      required: false,
      default: ''
    },
    loadingImage: {
      type: String,
      required: true,
      default: window.pixels.dark

    },
    errorImage: {
      type: String,
      required: false,
      default: window.pixels.clear
    },
    backgroundSize: {
      type: String,
      required: false,
      default: 'cover'
    }
  },
  data () {
    return {
      imageWidth: 0,
      imageHeight: 0,
      imageState: 'loading',
      asyncImage: new Image()
    }
  },
  computed: {
    computedStyle () {
      if (this.imageState === 'loading') {
        return `background-image: url(${this.loadingImage}); background-size: ${this.backgroundSize}; background-repeat: no-repeat;`
      }
      if (this.imageState === 'error') {
        return `background-image: url(${this.errorImage}); background-size: ${this.backgroundSize}; background-repeat: no-repeat;`
      }
      if (this.imageState === 'loaded') {
        return `background-image: url(${this.asyncImage.src}); background-size: ${this.backgroundSize}; background-repeat: no-repeat;`
      }
      return ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.fetchImage()
    })
  },
  methods: {
    fetchImage (url) {
      this.asyncImage.onload = this.imageOnLoad
      this.asyncImage.onerror = this.imageOnError
      this.imageState = 'loading'
      this.asyncImage.src = this.imageSource
    },
    imageOnLoad (success) {
      this.imageState = 'loaded'
    },
    imageOnError () {
      this.imageState = 'error'
    }
  }
}
</script>
