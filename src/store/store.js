import Vuex from 'vuex';

export function createInitialStore() {
    return new Vuex.Store({
        strict: true,
        state: {
            posts: [],
            chats: []
        },
        mutations: {
            init(state, newposts) {
                state.posts = newposts.posts;
            },
            initChats(state, newChats) {
                state.chats = newChats.chats;
            }
        }
    });
}