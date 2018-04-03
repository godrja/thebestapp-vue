import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import { createInitialStore } from './store/store';

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
import VuePreview from 'vue-preview'
import VuePhotoswipe from 'vue-photoswipe';

Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(Vuex);
Vue.use(VuePreview);
Vue.use(VuePhotoswipe);

let store = createInitialStore();

new Vue({
  render: h => h(App),
  store,
  template: "#main"
}).$mount('#app');
