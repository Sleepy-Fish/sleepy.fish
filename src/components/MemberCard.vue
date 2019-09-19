<template>
  <div class="card-wrapper">
    <div
      class="card"
      :class="'align-' + opp(float)"
    >
      <h5 class="align-center">
        {{ member.name }}
      </h5>
      <div
        class="profile-img"
        :class="'float-' + float"
        :style="'background-image: url(' + member.img + '); margin-' + opp(float) + ': 50px;'"
      />
      <h4>{{ member.position }}</h4>
      <a :href="'mailto:' + member.email">{{ member.email }}</a>
      <hr style="margin:10px 0px;">
      <!-- eslint-disable -->
      <small v-html="member.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    },
    float: {
      type: String,
      default: 'left'
    }
  },
  methods: {
    opp (side) {
      const map = {
        right: 'left',
        left: 'right',
        top: 'bottom',
        bottom: 'top'
      }
      return map[side]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  max-width: 600px;
}
.card {
  min-height: 360px;
  .profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
}
</style>
