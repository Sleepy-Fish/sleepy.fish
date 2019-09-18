<template>
  <div>
    <Splash />
    <div class="full-width center-content">
      <section class="section-primary">
        <h1 class="align-center">Sleepy Fish Is...</h1>
        <div class="container">
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
      </section>

      <section class="section-secondary">
        <h2 class="align-center">Meet The Team...</h2>
        <div class="row">
          <MemberCard
            v-for="(member, index) in members"
            :key="index"
            :member="member"
            :float="floatValue(index)"
          />
          <MemberCard
            :member="riley"
            float="right"
          />
        </div>
      </section>

      <section class="section-tertiary">
        <p>maybe a third thing if you can think of it</p>
      </section>
    </div>
  </div>
</template>

<script>
import Splash from 'components/Splash.vue'
import MemberCard from 'components/MemberCard.vue'

export default {
  components: {
    Splash,
    MemberCard
  },
  methods: {
    floatValue (i) {
      return i % 2 === 0 ? 'right' : 'left'
    }
  },
  beforeCreate () {
    this.members = [
      {
        name: 'J Riley Harrington',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Founder + CEO',
        description: 'When the company needs starting, someone needs to do it. This guy here started it and now he kind of just sits around.'
      },
      {
        name: 'James Riley',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Artistic Director',
        description: 'This company looked like shit until this guy showed up. We still pay him but all he really does now is drink wine and yell at people.'
      },
      {
        name: 'Riggy James',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Lead Game Engineer',
        description: 'Once every was done coming up with ideas some one had to actually bring home the bacon. We found this guy in the back of a Best Buy argueing with a 16 year old kid over the definition of a Network Switch. We brought him home, cleaned him up, and he hasn\'t stopped churning out code ever since.'
      },
      {
        name: 'J.R. Harrington',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'All-In-One Artist',
        description: 'We could have hired a concept artist, environment artist, 3D modeller, rigger, animator, and an illustrator... But instead we found a chump who would do it all for free. Please no one tell him that he is doing the job of size people. It would literally ruin us.'
      },
      {
        name: 'Harry O\'Riley',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Designer + Writer',
        description: 'Everyone kept trying to recreate \'Zombies Ate My Neighbors\' so many times that we eventually all agreed we would leave game design up to a professional. Unfortunately those people are expensive so we settled for this guy. Whatever.'
      },
      {
        name: 'Riley H. James',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Another Job',
        description: 'We really wanted to fill out the space on our about page so we just kept hiring people until we had a nice even number. This guy turned out to be alright though. Every one enjoys having him around.'
      }
    ]
  }
}
</script>
