import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/common.css'
import '@/assets/css/decorator.css'
import Icon from '@/components/Icon.vue'
import api from '@/api'
import Tabs from '@/components/tabs'
import BackTop from '@/components/backtop'

Vue.use(Tabs);
Vue.use(BackTop);
Vue.prototype.$api = api;
Vue.component("Icon",Icon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
