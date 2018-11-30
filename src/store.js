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
    vrais: {
      vin1: 'Marsannay',
      vin1_1: 'Pommard',
      vin2: 'Chasse-Spleen',
      vin2_1: 'Domaine du Bouscat',
      vin2_2: 'Château Haut-Ballet',
      vin3: 'Château le Rosey',
      vin4: 'Château Haut-Ballet',
      vin4_1: 'Chasse-Spleen',
      vin4_2: 'Domaine du Bouscat',
      vin5: 'Domaine du Bouscat',
      vin5_1: 'Château Haut-Ballet',
      vin5_2: 'Chasse-Spleen',
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
