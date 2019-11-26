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
  typographer: true,
  highlight: (str, lang) => {
    if (lang) {
      let langObject = Prism.languages[lang]
      try {
        return (
          `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(str, langObject, lang)}</code></pre>`
        )
      } catch (err) {
        console.error(err)
      }
    }
    return `<pre class="language-${lang}"><code class="language-${lang}>${md.utils.escapeHtml(str)}</code></pre>`
  }
})
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-sup'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-imsize'))
  .use(require('markdown-it-container'), 'frame', {
    validate: function (params) {
      return params.trim().match(/^frame\s+(.*)$/)
    },
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^frame\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        return `<figure style="background-color:${md.utils.escapeHtml(m[1])}; padding: 20px 50px 0px 50px; display: inline-block;">`
      } else {
        return '</figure><br><br>\n'
      }
    }
  })

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
