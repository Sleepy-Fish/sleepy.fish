<template>
  <div class="full-width center-content">
    <img src="static/img/fish-print.svg">
    <WelcomeMessage name="sleepy.fish" />
    <p>This is a portfolio website for J Riley Harrington.</p>
  </div>
</template>

<script>
import WelcomeMessage from 'components/Home/WelcomeMessage'

export default {
  components: {
    WelcomeMessage
  }
}
</script>
