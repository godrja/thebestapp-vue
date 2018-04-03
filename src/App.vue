<template id="main">
  <v-ons-page>
    <v-ons-tabbar position="bottom"
        :tabs="tabs"
        :visible="true"
        :index.sync="activeIndex">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import PostsTab from './components/PostsTab.vue';
import ChatsTab from './components/ChatsTab.vue';
import NotificationsTab from './components/NotificationsTab.vue';
import MoreTab from './components/MoreTab.vue';
import postsApi from './api/posts';
import chatsApi from './api/chats';

export default {
  name: 'app',
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? "md-home" : "ion-home",
          label: "Streams",
          page: PostsTab,
        },
        {
          icon: this.md() ? "md-comments" : "ion-ios-bell",
          label: "Chats",
          badge: 7,
          page: ChatsTab,
        },
        {
          icon: this.md() ? "md-notifications" : "ion-ios-bell",
          label: "Notifications",
          page: NotificationsTab,
        },
        {
          icon: this.md() ? "md-more" : "ion-ios-bell",
          label: "Less",
          page: MoreTab,
        }
      ]
    }
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    },
  },
  mounted() {
    const store = this.$store;
    postsApi.fetchPosts().then(function(posts) {
      store.commit('init', { posts: posts.data });
    });
    chatsApi.fetchChats().then(function(chats) {
      store.commit('initChats', { chats: chats.data });
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
