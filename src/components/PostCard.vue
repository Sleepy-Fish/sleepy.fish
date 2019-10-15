<template>
  <div class="card-wrapper">
    <h4 class="post-title">
      <router-link :to="`/blog/${ post.id }`">
        {{ post.title }}
      </router-link>
    </h4>
    <small>
      Posted: {{ post.author }} - {{ post.date | date }}
    </small>
    <ul class="tags">
      <li
        v-for="tag in post.tags"
        :key="tag"
        class="tag"
        :class="'tag-' + tag | classify"
        @click="$parent.filter(tag)"
      >
        {{ tag }}
      </li>
    </ul>
    <div class="description-spacer">
      <img :src="post.img">
      <!-- eslint-disable -->
      <small v-html="post.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  padding: 30px;
  .post-title {
    margin: 0;
  }
  .tags {
    margin: 20px 0px;
    .tag {
      cursor: pointer;
    }
  }
  .description-spacer {
    min-height: 200px;
    max-width: 600px;
    padding-bottom: 20px;
    border-bottom: solid 1px white;
  }
  img {
    float: left;
    margin-right: 30px;
    margin-bottom: 10px;
  }
}
</style>
