<template>
  <div>
    <Splash />
    <div class="full-width center-content">
      <div class="content">
        <div id="filter-term-label">
          <span>Showing: </span>
          <ul
            v-if="!filterTerms.length"
            class="tags"
          >
            <li
              class="tag showing-all"
            >
              All Posts
            </li>
          </ul>
          <ul
            v-if="filterTerms.length"
            class="tags"
          >
            <li
              v-for="tag in filterTerms"
              :key="tag"
              class="tag filter-tag"
              :class="'tag-' + tag | classify"
            >
              {{ tag }}
              <div
                class="remove-tag"
                @click="filter(tag)"
              >
                <font-awesome-icon icon="times" />
              </div>
            </li>
          </ul>
        </div>
        <post-card
          v-for="post in filteredPosts"
          :key="post.id"
          :post="post"
        />
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
    this.filteredPosts = posts
    this.filterTerms = []
  },
  methods: {
    filter (toggle) {
      const index = this.filterTerms.indexOf(toggle)
      if (index > -1) {
        this.filterTerms.splice(index, 1)
      } else {
        this.filterTerms.push(toggle)
      }
      if (this.filterTerms.length === 0) {
        this.filteredPosts = this.posts
      } else {
        this.filteredPosts = []
        for (const post of this.posts) {
          let include = true
          for (const tag of this.filterTerms) {
            if (!post.tags.includes(tag)) {
              include = false
              break
            }
          }
          if (include) this.filteredPosts.push(post)
        }
      }
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
#filter-term-label {
  padding: 0px 30px;
}
.showing-all {
  background-color: $color-gray-800 !important;
}
@each $name, $color in $tag-colors {
  .tag-#{$name} {
      &.filter-tag {
      padding-right: 0;
      .remove-tag {
        cursor: pointer;
        float: right;
        color: $color;
        background-color: lighten($color, 30%);
        line-height: 0;
        padding: 3px 5px;
        margin: 0px 10px;
        border-radius: 10px;
        &:hover {
          background-color: lighten($color, 10%);
        }
      }
    }
  }
}
</style>
