<template>
  <v-ons-card>
    <avatar :user="postCreator"/>
    <div class="title">{{post.title}}</div>
    <div class="content">{{post.text}}</div>

    <div class="preview-img-list"> 
      <img class="preview-img-item" :key="index" v-for="(item, index) in images"
          :src="item.src" @click="$photoswipe.open(index, images)">
    </div>
  </v-ons-card>
</template>

<script>
import Avatar from '../users/Avatar.vue';
import Gallery from 'vue-gallery';

export default {
  props: {
    'post': {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      index: null
    }
  },

  computed: {
    postCreator() {
      return {
        'avatar': this.post.avatar,
        'display_name': this.post.display_name,
        'display_name_extension': this.post.display_name_extension,
        'created': this.post.created
      }
    },
    images: function() {
      return this.post.media.map((m) => { return { src: m.url, w: 500, h:500 }; });
     }
  },

  components: {
      Avatar
  },
}
</script>

<style scoped>
  .preview-img-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .preview-img-item {
    margin: 5px;
    max-width: 200px;
    max-height: 200px;
  }

  .title {
    text-overflow: inherit;
  }

  .content {
    white-space: pre-wrap;
  }
</style>
