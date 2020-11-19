import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NoteList from './components/NoteList.vue';
import ViewElement from './components/ViewElement.vue';
import CreateElement from './components/CreateElement.vue';
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/create',
      component: CreateElement
    },
    {
      path: '/',
      component: NoteList
    },
    {
      path: '/view',
      component: ViewElement
    }]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
