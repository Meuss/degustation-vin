import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Choisir from './views/Choisir.vue';
import Liste from './views/Liste.vue';
import Resultats from './views/Resultats.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/liste',
      name: 'liste',
      component: Liste,
    },
    {
      path: '/choisir',
      name: 'choisir',
      component: Choisir,
    },
    {
      path: '/resultats',
      name: 'resultats',
      component: Resultats,
    },
  ],
});
