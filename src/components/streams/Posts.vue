<template>
  <div>
      <post :key="post.id" :post="post" v-for="post in posts" />
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  
  computed: {
    posts: function() {
      return this.$store.state.posts;
    }
  },

  components: {
      Post
  },
}
</script>
