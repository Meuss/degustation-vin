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
      vin8: '',
    },
    vraie: {
      vin1: 'Marsannay - Les Longeroies',
      vin2: 'Chasse-Spleen',
      vin3: 'Château le Rosey',
      vin4: 'Château Haut-Ballet',
      vin5: 'Domaine du Bouscat',
      vin6: 'Barahonda',
      vin7: 'Cornalin de Fully',
      vin8: 'Le Syrah de papa Jean',
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
