<template>
  <div>
    <div class="row">
      <div v-if="!submitted" class="col s12">
        <form @submit.prevent="validateForm">
          <div class="row">
            <div class="input-field col s8 nom_joueur">
              <input
                id="joueur"
                type="text"
                class="validate"
                maxlength="30"
                :value="joueur"
                v-on:keyup.stop="updateField('joueur', $event.target.value)"
              >
              <label for="joueur" :class="{active: joueur!= ''}">Donne ton pseudo nigga</label>
            </div>
            <div class="row">
              <div v-for="index in 8" :key="index" class="col s12">
                <div class="valign-wrapper col s1">
                  <h5 class="left-align">{{index}}.</h5>
                </div>
                <div class="input-field col s11">
                  <select @change="updateField(`vin${index}`, $event.target.value)">
                    <option value :selected="getVin(index) === ''"></option>
                    <option
                      v-for="(pinard, indexPinard) of pinards"
                      :key="indexPinard"
                      :value="pinard.name"
                      :selected="getVin(index) === pinard.name"
                    >{{pinard.name}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <button
                class="btn waves-effect waves-light btn-large"
                :class="{disabled: submitted}"
                type="submit"
                name="action"
              >
                Valider
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="col s12 left-align">
        <div v-if="!finished">
          <Loading/>
        </div>
        <div v-else class="personal-results">
          <img class="expert" :src="randomexpert" alt>
          <div class="citation">
            <i>« {{randomQuote}} »</i>
          </div>
          <div class="citationname right-align">
            <strong>&nbsp;– {{joueur}}</strong>, oenologue padawan
          </div>
          <hr>
          <br>
          <h5>Sélection de {{joueur}}</h5>
          <ul>
            <li>1. {{vin1}}</li>
            <li>2. {{vin2}}</li>
            <li>3. {{vin3}}</li>
            <li>4. {{vin4}}</li>
            <li>5. {{vin5}}</li>
            <li>6. {{vin6}}</li>
            <li>7. {{vin7}}</li>
            <li>8. {{vin8}}</li>
          </ul>
          <div class="right-align">
            <button class="btn grey lighten-1 right-align" @click="openmodal()">Restart</button>
          </div>
          <sweet-modal ref="resetmodal">
            <h5>T'es sûr que tu veux tout recommencer?</h5>
            <div class="restart-buttons">
              <button class="btn grey accent-3" @click="closemodal()">Non, oublie</button>
              <button class="btn red" @click="reset()">Oui, je recommence</button>
            </div>
          </sweet-modal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store';
import db from '@/firebase/init';
import Loading from '@/components/Loading.vue';
import { SweetModal } from 'sweet-modal-vue';

export default {
  name: 'Form',
  data() {
    return {
      quotes: [
        'Je viens de sauver du vin. Il était piégé dans une bouteille!',
        'Il faut manger comme un homme en bonne santé et boire comme un malade.',
        'Ça ne peut pas faire de mal!',
        "J'ai soif!",
        '#beurré',
        "Il y a au moins une chose qui restera positive dans ma vie: mon taux d'alcoolémie.",
        'Mon groupe sanguin est A (pértif)',
        'Tout bu, or not tout bu',
        "L'alcool? Ça ne fait pas partie de mon vodkabulaire. Attends, je vais voir sur whiskypédia.",
        "Ce soir chuis tellement CHAUD que j'ai failli boire de l'eau",
        "Bon, j'ai soif, passons à la VP.",
        'Ok',
        'Choisir ou conduire, il faut boire.',
        "La sobriété est une hallucination due au manque d'alcool.",
        'Il y a plus de philosophie dans une bouteille de vin que dans tous les livres.',
        "La seule arme qui m'intéresse, c'est le tire-bouchon.",
        "L'alcool est la cause et la solution à tous mes problèmes.",
        "Mon seul problème avec l'alcool c'est quand j'en renverse.",
      ],
    };
  },
  methods: {
    updateField(field, value) {
      store.commit('updateForm', {
        [field]: value,
      });
      if (field != 'joueur') {
        this.showTaunt();
      }
    },
    /* eslint-disable-next-line */
    validateForm: function(e) {
      if (
        this.joueur != '' &&
        this.vin1 != '' &&
        this.vin2 != '' &&
        this.vin3 != '' &&
        this.vin4 != '' &&
        this.vin5 != '' &&
        this.vin6 != '' &&
        this.vin7 != '' &&
        this.vin8 != '' &&
        !this.submitted
      ) {
        // send to firebase
        db.collection('joueur').add({
          joueur: this.joueur,
          vin1: this.vin1,
          vin2: this.vin2,
          vin3: this.vin3,
          vin4: this.vin4,
          vin5: this.vin5,
          vin6: this.vin6,
          vin7: this.vin7,
          vin8: this.vin8,
        });
        // commit to store
        store.commit('submitted', true);
      } else {
        this.$toasted.show('Formulaire incomplet! Arrête de boire!', { type: 'error', icon: 'warning', position: 'top-center', fullWidth: true });
      }
    },
    openmodal() {
      this.$refs.resetmodal.open();
    },
    closemodal() {
      this.$refs.resetmodal.close();
    },
    reset() {
      store.commit('resetState');
      this.closemodal();
    },
    showTaunt() {
      const taunts = [
        'One for me?',
        'ok',
        'Montagne Vin!',
        "Putain mais t'es mauvais!",
        'Copie pas sur Mike, il capte ked 😂',
        'Dis-voir à Badoux de se la fermer un peu',
        "C'est pas ce que Guigui a choisi",
        "T'as pas été en Bourgogne toi?",
        '🤓 Master 🤓',
        "T'es sûr? Après tlm voit ta réponse si jms",
        "Moi j'aurai mis le Cornalin",
        "et mon cul c'est du poulet?",
        'Nul à chier 💩💩💩',
        'mets pas des trucs au bol!',
        '🤓 Master 🤓',
        'oenologue mon cul!',
        'tu connais rien au 🍷',
        '🤓 Master 🤓',
        "C'est pas l'Amarone?",
        "du chasselas pendant que t'y es?",
        '... et ça se dit soiffard!',
        'retourne boire de la suze',
        'jamais vu un type aussi mauvais!',
        'pfff, rien à voir!',
        '..ou pas 🤣🤣',
        'touriste!',
        'vivement la VP...',
        "ouai en fait t'en as aucune idée",
        "Attention, celui-là c'est un piège! 👺",
        '👉🏼🚪',
        'HAHAHAHAHA',
        'diagnostic?',
        'que bruto!',
        'tout à fait!',
        '🤦‍♀️🤦‍♂️',
        'beurré!',
        'beurré!',
      ];
      const selectedTaunt = taunts[Math.floor(Math.random() * taunts.length)];
      this.$toasted.show(selectedTaunt);
    },
  },
  mounted() {
    var elems = document.querySelectorAll('select');
    window.M.FormSelect.init(elems);
  },
  computed: {
    randomexpert() {
      return `expert-${Math.floor(Math.random() * 11) + 1}.jpg`;
    },
    pinards() {
      return store.state.pinards;
    },
    randomQuote() {
      return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    },
    getVin() {
      return index => store.state.form['vin' + index];
    },
    joueur() {
      return store.state.form.joueur;
    },
    vin1() {
      return store.state.form.vin1;
    },
    vin2() {
      return store.state.form.vin2;
    },
    vin3() {
      return store.state.form.vin3;
    },
    vin4() {
      return store.state.form.vin4;
    },
    vin5() {
      return store.state.form.vin5;
    },
    vin6() {
      return store.state.form.vin6;
    },
    vin7() {
      return store.state.form.vin7;
    },
    vin8() {
      return store.state.form.vin8;
    },
    submitted() {
      return store.state.submitted;
    },
    finished() {
      return store.state.finished;
    },
  },
  components: {
    Loading,
    SweetModal,
  },
};
</script>

<style lang="scss" scoped>
.valign-wrapper h5 {
  margin-top: 24px;
}
.expert {
  max-width: 100%;
}
.restart-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  .btn {
    margin-bottom: 20px;
  }
}
</style>
