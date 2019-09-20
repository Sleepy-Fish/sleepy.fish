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
        img: 'static/img/headshots/riley.jpg',
        email: 'riley@sleepy.fish',
        position: 'Founder + Engineer',
        description: 'When the company needs starting, someone needs to do it. This guy really just wanted to be a programmer but no company would make the exact game he wanted to play so he had to start his own. What other options did he have?',
        real: true
      },
      {
        name: 'Jeremy Doss',
        img: 'static/img/headshots/jeremy.jpg',
        email: 'jeremy@sleepy.fish',
        position: 'Founder + Engineer',
        description: 'We hired this guy because his last name sounded like a computery thing. That\'s really all he has going for him.',
        real: true
      },
      {
        name: 'Hannah Rucker',
        img: 'https://via.placeholder.com/150x150',
        email: 'hannah@sleepy.fish',
        position: 'Operations Manager',
        description: 'This company was on the  like shit until she showed up. She does alot of thing that help everyone and blah blah. I just gotta get this long enough or the design will break.',
        real: true
      },
      {
        name: 'Lauren Grills',
        img: 'static/img/headshots/lauren.jpg',
        email: 'lauren@sleepy.fish',
        position: 'UI Engineer',
        description: 'She writes code. She makes UIs. She does not ask for much in return. That is why we like her.',
        real: true
      },
      {
        name: 'Caleb Rogers',
        img: 'https://via.placeholder.com/150x150',
        email: 'caleb@sleepy.fish',
        position: 'Web Engineer',
        description: 'Someone has to build the websites and browser games. Why not this schmuck? He worked on such earth shattering Sleepy Fish titles as Frog Farts. And Frog Farts 2: The Fartening. We hope to see more out of this noob soon.',
        real: true
      },
      {
        name: 'Could Be You',
        img: 'https://via.placeholder.com/150x150',
        email: 'riley@sleepy.fish',
        position: 'All-In-One Artist',
        description: 'We are looking for help with all artistic endevours. Concept art, environmental art, 3D modelling, rigging, animating, and illustrating. This sort of stuff required a whole team but we are accepting any help we can get. Otherwise Riley is going to do it and it will not be great.',
        real: false
      },
      {
        name: 'Could Be You',
        img: 'https://via.placeholder.com/150x150',
        email: 'riley@sleepy.fish',
        position: 'Designer + Writer',
        description: 'We have got some great ideas in the works here at Sleepy Fish but we are in constant need of help refining and making those ideas concrete. If you want to get involved in the creative side of designing games we are accepting all the help we can get.',
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
