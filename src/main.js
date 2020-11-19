import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

const Create = { template: '<div>create</div>' }

const routes = [
  { path: '/create', component: Create },
]

const router = new VueRouter({
  routes
})
