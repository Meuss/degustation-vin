import Vue from 'vue';
import Vuex from 'vuex';
import pinards from './assets/pinards.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pinards,
  },
  mutations: {},
  actions: {},
  // getters: {
  //   pinards: state => {
  //     const newOrder = state.orderedPinards.slice();
  //     /* eslint-disable-next-line */
  //     return newOrder.sort(randomize);
  //   },
  // },
});

// function randomize() {
//   return Math.random() - 0.5;
// }
