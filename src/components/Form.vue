<template>
  <div class="container">
    <div class="row">
      <div v-if="!submitted" class="col s12">
        <!-- <h4 class="left-align">Tes choix</h4> -->
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
              <div v-for="index in 7" :key="index" class="col s12">
                <div class="valign-wrapper col s1">
                  <h5 class="left-align">{{index}}.</h5>
                </div>
                <div class="input-field col s11">
                  <select
                    class="browser-default"
                    @change="updateField(`vin${index}`, $event.target.value)"
                  >
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
              <div class="invalid red col s12 white-text" v-if="invalid">
                <h6>Le formulaire n'est pas complet.
                  <br>Putain mais arrête de boire!
                </h6>
              </div>
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
        <img class="expert" src="expert.jpg" alt>
        <div class="citation">
          <i>« {{randomQuote}} »</i>
        </div>
        <div class="citationname right-align">
          <strong>&nbsp;– {{joueur}}</strong>, oenologue padawan
        </div>
        <hr>
        <br>
        <button class="btn">Sélection de {{joueur}}</button>
        <ul>
          <li>1. {{vin1}}</li>
          <li>2. {{vin2}}</li>
          <li>3. {{vin3}}</li>
          <li>4. {{vin4}}</li>
          <li>5. {{vin5}}</li>
          <li>6. {{vin6}}</li>
          <li>7. {{vin7}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store';
import db from '@/firebase/init';

export default {
  name: 'Form',
  data() {
    return {
      invalid: false,
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
      ],
    };
  },
  methods: {
    updateField(field, value) {
      this.invalid = false;
      store.commit('updateForm', {
        [field]: value,
      });
      if (field != 'joueur') {
        this.showTaunt();
      }
    },
    /* eslint-disable-next-line */
    validateForm: function(e) {
      if (this.joueur != '' && this.vin1 != '' && this.vin2 != '' && this.vin3 != '' && this.vin4 != '' && this.vin5 != '' && this.vin6 != '' && this.vin7 != '' && !this.submitted) {
        console.log('✅✅✅✅');
        this.invalid = false;
        // send to firebase
        db.collection('joueur')
          .add({
            joueur: this.joueur,
            vin1: this.vin1,
            vin2: this.vin2,
            vin3: this.vin3,
            vin4: this.vin4,
            vin5: this.vin5,
            vin6: this.vin6,
            vin7: this.vin7,
          })
          .catch(err => {
            console.log(err);
          });
        // commit to store
        store.commit('submitted', true);
      } else {
        this.invalid = true;
        console.log('👺👺👺👺');
      }
    },
    showTaunt() {
      // const show = Math.random() - 0.5;
      const taunts = [
        "Putain mais t'es mauvais!",
        'Copie pas sur Boris, il capte ked 😂',
        'Dis-voir à Badoux de se la fermer un peu',
        "C'est pas ce que Constantin a choisi",
        "T'as pas été en Bourgogne toi?",
        '🤓 Master 🤓',
        "T'es sûr? Après tlm voit ta réponse si jms",
        "Moi j'aurai mis le Cornalin",
        "et mon cul c'est du poulet?",
        'Nul à chier 💩💩💩',
        'mets pas des trucs au bol!',
        '🤓 Master 🤓',
        "Copie pas sur Richy, c'est pas du cubis!",
        'oenologue mon cul!',
        'tu connais rien au 🍷',
        '🤓 Master 🤓',
        "C'est pas le Chasse-Spleen?",
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
        '🥴🥴🥴',
        '🤦‍♀️🤦‍♂️',
        'beurré!',
      ];
      const selectedTaunt = taunts[Math.floor(Math.random() * taunts.length)];
      this.$toasted.show(selectedTaunt);
    },
  },
  computed: {
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
    submitted() {
      return store.state.submitted;
    },
  },
};
</script>

<style lang="scss" scoped>
.valign-wrapper h5 {
  margin-top: 24px;
}
.invalid {
  margin-bottom: 30px;
}
.expert {
  max-width: 100%;
}
</style>
