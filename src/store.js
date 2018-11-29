import Vue from 'vue';
import Vuex from 'vuex';
import pinards from './assets/pinards.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pinards,
    form: {
      joueur: '',
      vin1: '',
      vin2: '',
      vin3: '',
      vin4: '',
      vin5: '',
      vin6: '',
      vin7: '',
    },
    submitted: false,
  },
  mutations: {
    updateForm(state, form) {
      Object.assign(state.form, form);
    },
    submitted(state, payload) {
      this.state.submitted = payload;
    },
  },
  actions: {},
});
