<template>
  <div>
    <div class="center-content container">
      <h1>
        {{ post.title }}
      </h1>
      <small>
        Posted: {{ post.author }} - {{ post.date | date }}
      </small>
      <hr>
      <!-- eslint-disable -->
      <small v-html="post.html" />
    </div>
  </div>
</template>

<script>
import posts from 'static/data/posts'
import axios from 'axios'
const marked = require('marked')

export default {
  created () {
    const search = posts.filter(post => post.id === this.$route.params.id)
    if (search.length < 1) {
      this.$router.push({ path: '/blog' })
    } else {
      this.post = search[0]
      this.post.html = '<p>Loading Content...</p>'
    }
  },
  mounted () {
    if (this.post.markdown) {
      axios.get(this.post.markdown).then(response => {
        console.log(marked(response.data))
        this.post.html = marked(response.data)
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: $color-gray-900;
  padding: 20px;
}
</style>
