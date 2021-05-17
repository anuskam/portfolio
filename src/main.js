import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll, {
  duration: 500,
  updateHistory : false, 
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.component('navbar', require('./components/navbar.vue').default);
Vue.component('principal', require('./components/principal.vue').default);
Vue.component('burguer', require('./components/burguer.vue').default);
Vue.component('projects', require('./components/projects.vue').default);
Vue.component('skills', require('./components/skills.vue').default);
Vue.component('aboutMe', require('./components/aboutMe.vue').default);
Vue.component('contact', require('./components/contact.vue').default);


new Vue({
  render: h => h(App),
}).$mount('#app')
