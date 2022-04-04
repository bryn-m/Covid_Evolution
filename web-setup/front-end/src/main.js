import Vue from 'vue'
import App from './App.vue'
import router from './router'

import maps from './image_data.js'

Vue.config.productionTip = false

let data = {
  mapList: maps,
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
