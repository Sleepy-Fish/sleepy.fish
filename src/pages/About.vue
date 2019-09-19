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
  beforeCreate () {
    this.members = [
      {
        name: 'J Riley Harrington',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Founder + Engineer',
        description: 'When the company needs starting, someone needs to do it. This guy really just wanted to be a programmer but no company would make the exact game he wanted to play so he had to start his own. What other options did he have?',
        real: true
      },
      {
        name: 'James Riley',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Artistic Director',
        description: 'This company looked like shit until this guy showed up. It still looks like shit but now we can safely hide behind the defense that this was just our artistic vision so fuck you. Best purchase we ever made.',
        real: false
      },
      {
        name: 'Riggy James',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Game Play Engineer',
        description: 'Once every was done coming up with ideas some one had to actually bring home the bacon. We found this guy in the back of a Best Buy argueing with a 16 year old employee. We brought him home, cleaned him up, faced him towards a computer, and he hasn\'t stopped churning out code ever since.',
        real: false
      },
      {
        name: 'Harry O\'Riley',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'All-In-One Artist',
        description: 'We could have hired a concept artist, environment artist, 3D modeller, rigger, animator, and an illustrator. Instead we found a chump who would do it all for free. Please no one tell him that he is doing the job of size people. It would literally ruin us.',
        real: false
      },
      {
        name: 'J.R.R. Harring',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Designer + Writer',
        description: 'We kept realizing that every game we tried to make was an accidently reboot of <a href="https://en.wikipedia.org/wiki/Zombies_Ate_My_Neighbors">Zombies Ate My Neighbors</a> so we eventually threw in the towel and agreed we would leave game design up to a professional. Unfortunately those people are expensive so we settled for this guy. Whatever.',
        real: false
      },
      {
        name: 'Riley H. James',
        img: 'https://via.placeholder.com/150x150',
        email: 'jrileyharrington@gmail.com',
        position: 'Code Monkey',
        description: 'Programming the games is the fun part. The real unsung heroes work on everything else because as it turns out, creating a game company requires more than just game programmers. We still can\'t figure out what makes this guy tick but we sure do appreciate him.',
        real: false
      }
    ]
  },
  methods: {
    floatValue (i) {
      return i % 2 === 0 ? 'right' : 'left'
    }
  }
}
</script>
