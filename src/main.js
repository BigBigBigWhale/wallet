// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './router/base'
// import $ from 'jquery'
import VueClipboards from 'vue-clipboards';

Vue.use(VueClipboards);
Vue.config.productionTip = false;

// /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
