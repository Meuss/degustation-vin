<template>
  <div class="choisir container">
    <div class="row">
      <div class="col s12">
        <h4 class="left-align">Choix du joueur</h4>
        <form @submit.prevent="validateForm">
          <div class="row">
            <div class="input-field col s12">
              <input id="last_name" type="text" class="validate" maxlength="30" v-model="joueur">
              <label for="last_name">Nom du joueur</label>
            </div>
            <div v-for="index in 7" :key="index">
              <div class="valign-wrapper col s1"><h5 class="left-align">{{index}}.</h5></div>
              <div class="input-field col s11">
                <select class="browser-default" name="vin1" v-model="$data[`vin${index}`]">
                  <option value="false" disabled selected></option>
                  <option v-for="(pinard, index) of pinards" :key="index" :value="pinard.name">{{pinard.name}}</option>
                </select>
              </div>
            </div>
            <button class="btn waves-effect waves-light btn-large" :class="{disabled: submitted}" type="submit" name="action">Valider
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="debug left-align row">
      <pre><code>{{ $data }}</code></pre>
    </div>
  </div>
</template>
<script>
import store from '@/store';
import db from '@/firebase/init';

export default {
  name: 'Choisir',
  data() {
    return {
      joueur: '',
      vin1: '',
      vin2: '',
      vin3: '',
      vin4: '',
      vin5: '',
      vin6: '',
      vin7: '',
      submitted: false,
    };
  },
  methods: {
    /* eslint-disable-next-line */
    validateForm: function(e) {
      if (this.joueur != '' && this.vin1 != '' && this.vin2 != '' && this.vin3 != '' && this.vin4 != '' && this.vin5 != '' && this.vin6 != '' && this.vin7 != '' && !this.submitted) {
        console.log('form valid 👍🏻');
        this.submitted = true;
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
        this.newMessage = null;
        this.feedback = null;
      } else {
        console.log('👺👺👺👺');
      }
    },
  },
  computed: {
    pinards() {
      return store.state.pinards;
    },
  },
};
</script>

<style lang="scss" scoped>
.valign-wrapper h5 {
  margin-top: 24px;
}
</style>
