<template>
    <div :class="`col col-md-${width}`">
        <div class="card">
            <div class="img-wrapper">
            <img :src="src">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    background-color: rgba(0,0,0,0.4);
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
