<template>
  <div class="panel">
    <div
      v-if="title"
      class="panel-head"
    >
      <p class="panel-title">
        {{ title }}
      </p>
    </div>
    <div class="panel-body">
      <slot />
    </div>
    <div class="panel-footer">
      <button
        class="button-primary"
        @click="callback(true)"
      >
        {{ primaryAction }}
      </button>
      <button
        class="button-primary-text"
        @click="callback(false)"
      >
        {{ secondaryAction }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    primaryAction: {
      type: String,
      default: 'Yes'
    },
    secondaryAction: {
      type: String,
      default: 'No'
    },
    callback: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .panel-head {
    font-family: $heading-font-family;
  }
  .panel {
    position: absolute;
    top: 40%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    max-width: 40%;
    max-height: 60vh;
    margin: auto;
    text-align: center;
    @media only screen and (max-width: 767px) {
      width: 100%;
      max-width: 100%;
      border-radius: 0px;
    }
  }
</style>
