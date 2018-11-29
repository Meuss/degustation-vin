import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(Toasted, { duration: 2000, position: 'bottom-right', theme: 'bubble' });
Vue.use(VueScrollReveal, {
  // https://github.com/scrollreveal/scrollreveal/wiki/Getting-Started-(v3.x)
  duration: 2000,
  easing: 'cubic-bezier(0.2, 0.94, 0.11, 1)',
  scale: 1,
  opacity: 0.1,
  distance: '200px',
  viewFactor: 0.2,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
