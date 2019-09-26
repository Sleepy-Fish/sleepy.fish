<template>
  <div>
    <Splash />
    <div class="full-width center-content">
      <section class="section-primary">
        <h1 class="align-center">
          Sleepy Fish Is...
        </h1>
        <div class="container">
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
      </section>

      <section class="section-secondary">
        <h2 class="align-center">
          Meet The Team...
        </h2>
        <div class="row row-centered">
          <MemberCard
            v-for="(member, index) in members"
            :key="index"
            :member="member"
            :float="floatValue(index)"
          />
        </div>
      </section>

      <section class="section-tertiary">
        <p>Maybe a third thing if you can think of it!</p>
      </section>
    </div>
  </div>
</template>

<script>
import Splash from 'components/Splash.vue'
import MemberCard from 'components/MemberCard.vue'
import members from 'static/data/members'

export default {
  components: {
    Splash,
    MemberCard
  },
  beforeCreate () {
    this.members = members
  },
  methods: {
    floatValue (i) {
      return i % 2 === 0 ? 'right' : 'left'
    }
  }
}
</script>
