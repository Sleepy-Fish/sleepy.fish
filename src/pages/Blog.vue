<template>
  <div>
    <Splash />
    <div class="full-width center-content">
      <div class="content">
        <div class="row">
          <post-card
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Splash from 'components/Splash'
import PostCard from 'components/PostCard'
import posts from 'static/data/posts'

export default {
  components: {
    Splash,
    PostCard
  },
  beforeCreate () {
    this.posts = posts
  }
}
</script>
