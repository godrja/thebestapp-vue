<template>
    <v-ons-list>
        <v-ons-list-item :key="chat.id" v-for="chat in chats">
            <div class="left">
                <avatar :includeName="false" :user="{avatar: chat.avatar}"/>
            </div>
            <div class="center">
                <span class="list-item__title">{{chat.name}}</span>
                <span class="list-item__subtitle">{{chat.snippet}}</span>
            </div>
        </v-ons-list-item>
    </v-ons-list>
</template>
<script>
import Avatar from '../users/Avatar.vue';

export default {

    computed: {
        chats: function() {
            return this.$store.state.chats;
        }
    },

    components: {
        Avatar
    }
}
</script>
<style scoped>
</style>

