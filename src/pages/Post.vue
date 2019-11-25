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
      <div v-html="post.html" />
    </div>
  </div>
</template>

<script>
import posts from 'static/data/posts'
import axios from 'axios'

import 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-csharp'
import 'prismjs/themes/prism-tomorrow.css'

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-sup'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-prism'))

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
        this.post.html = md.render(response.data)
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
h1 {
  color: $brand-color;
}
</style>
