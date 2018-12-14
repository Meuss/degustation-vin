<template>
  <div class="resultat container">
    <div class="row">
      <div class="col s12">
        <h3 class="left-align">Résultats</h3>
        <tabs
          :tabs="tabs"
          :currentTab="currentTab"
          :wrapper-class="'default-tabs'"
          :tab-class="'default-tabs__item'"
          :tab-active-class="'default-tabs__item_active'"
          :line-class="'default-tabs__active-line'"
          @onClick="handleClick"
        />
        <div class="content left-align">
          <div v-if="currentTab === 'tab1'">
            <ul>
              <div v-for="joueur in joueurs" :key="joueur.id">
                <li>
                  <button class="btn" disabled>{{joueur.nom}}</button>
                  <span>{{joueur.vin1}}</span>
                </li>
              </div>
            </ul>
          </div>
          <div v-if="currentTab === 'tab2'">
            <ul>
              <div v-for="joueur in joueurs" :key="joueur.id">
                <li>
                  <button class="btn" disabled>{{joueur.nom}}</button>
                  <span>{{joueur.vin2}}</span>
                </li>
              </div>
            </ul>
          </div>
          <div v-if="currentTab === 'tab3'">
            <ul>
              <div v-for="joueur in joueurs" :key="joueur.id">
                <li>
                  <button class="btn" disabled>{{joueur.nom}}</button>
                  <span>{{joueur.vin3}}</span>
                </li>
              </div>
            </ul>
          </div>
          <div v-if="currentTab === 'tab4'">
            <ul>
              <div v-for="joueur in joueurs" :key="joueur.id">
                <li>
                  <button class="btn" disabled>{{joueur.nom}}</button>
                  <span>{{joueur.vin4}}</span>
                </li>
              </div>
            </ul>
          </div>
          <div v-if="currentTab === 'tab5'">
            <ul>
              <div v-for="joueur in joueurs" :key="joueur.id">
                <li>
                  <button class="btn" disabled>{{joueur.nom}}</button>
                  <span>{{joueur.vin5}}</span>
                </li>
              </div>
            </ul>
          </div>
          <div v-if="currentTab === 'tab6'">
            <ul>
              <div v-for="joueur in joueurs" :key="joueur.id">
                <li>
                  <button class="btn" disabled>{{joueur.nom}}</button>
                  <span>{{joueur.vin6}}</span>
                </li>
              </div>
            </ul>
          </div>
          <div v-if="currentTab === 'tab7'">
            <ul>
              <div v-for="joueur in joueurs" :key="joueur.id">
                <li>
                  <button class="btn" disabled>{{joueur.nom}}</button>
                  <span>{{joueur.vin7}}</span>
                </li>
              </div>
            </ul>
          </div>
          <div v-if="currentTab === 'tab8'">
            <ul>
              <div v-for="joueur in joueurs" :key="joueur.id">
                <li>
                  <button class="btn" disabled>{{joueur.nom}}</button>
                  <span>{{joueur.vin8}}</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div class="bg"></div>
      </div>
    </div>
    <div class="row right-align">
      <div class="col s12">
        <button class="waves-effect waves-light btn-large red accent-3" @click="openScores()">
          <i class="material-icons left">equalizer</i>Scores finaux
          <i class="material-icons right">equalizer</i>
        </button>
      </div>
    </div>
    <sweet-modal ref="modal">
      <ul class="collection">
        <li
          v-for="(player, index) in points"
          :key="index"
          class="row player-results collection-item"
        >
          <div v-if="player[1] != 0" class="number red lighten-3 white-text">
            <div class="inner-number">
              {{player[1]}}
              <span>pts</span>
            </div>
          </div>
          <div v-else class="number white-text">
            <div class="inner-number">💩</div>
          </div>

          <div class="col s2"></div>
          <div class="col s5 left-align">
            <h6>{{player[0]}}</h6>
          </div>
          <div v-if="player[1] != 0 " class="col s5 left-align">
            <div
              v-for="(correctWine, correctindex) in player[2]"
              :key="correctindex"
              class="left-align correctwines"
            >
              <i class="material-icons">done_all</i>
              {{correctWine}}
            </div>
            <div v-if="player[3].length">
              <div
                v-for="(halfCorrect, halfCorrectIndex) in player[3]"
                :key="halfCorrectIndex"
                class="left-align correctwines"
              >
                <i class="material-icons">done</i>
                {{halfCorrect}}
              </div>
            </div>
          </div>
          <div v-else class="col s5 left-align">
            <div class="left-align correctwines">
              <i class="material-icons">more_horiz</i>
              Joli!
            </div>
          </div>
        </li>
      </ul>
    </sweet-modal>
  </div>
</template>
<script>
import Tabs from 'vue-tabs-with-active-line';
import db from '@/firebase/init';
import store from '@/store';
import { SweetModal } from 'sweet-modal-vue';

export default {
  name: 'Resultats',
  data() {
    return {
      joueurs: [],
      tabs: [
        { title: 'Vin 1', value: 'tab1' },
        { title: 'Vin 2', value: 'tab2' },
        { title: 'Vin 3', value: 'tab3' },
        { title: 'Vin 4', value: 'tab4' },
        { title: 'Vin 5', value: 'tab5' },
        { title: 'Vin 6', value: 'tab6' },
        { title: 'Vin 7', value: 'tab7' },
        { title: 'Vin 8', value: 'tab8' },
      ],
      currentTab: 'tab1',
    };
  },
  created() {
    const ref = db.collection('joueur');
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const doc = change.doc;
          this.joueurs.push({
            id: doc.id,
            nom: doc.data().joueur,
            vin1: doc.data().vin1,
            vin2: doc.data().vin2,
            vin3: doc.data().vin3,
            vin4: doc.data().vin4,
            vin5: doc.data().vin5,
            vin6: doc.data().vin6,
            vin7: doc.data().vin7,
            vin8: doc.data().vin8,
          });
        }
      });
    });
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    openScores() {
      this.$refs.modal.open();
    },
    comparator(a, b) {
      if (a[1] < b[1]) return 1;
      if (a[1] > b[1]) return -1;
      return 0;
    },
  },
  computed: {
    points() {
      const points = [];
      this.joueurs.forEach(player => {
        player.score = 0;
        player.correct = [];
        player.halfcorrect = [];
        if (player.vin1 === this.vrais.vin1) {
          player.score += 2;
          player.correct.push(`1. ${this.vrais.vin1}`);
        }
        if (player.vin1 === this.vrais.vin1_1) {
          player.score += 1;
          player.halfcorrect.push(`1. ${this.vrais.vin1_1}`);
        }
        if (player.vin2 === this.vrais.vin2) {
          player.score += 2;
          player.correct.push(`2. ${this.vrais.vin2}`);
        }
        if (player.vin2 === this.vrais.vin2_1) {
          player.score += 1;
          player.halfcorrect.push(`2. ${this.vrais.vin2_1}`);
        }
        if (player.vin2 === this.vrais.vin2_2) {
          player.score += 1;
          player.halfcorrect.push(`2. ${this.vrais.vin2_2}`);
        }
        if (player.vin3 === this.vrais.vin3) {
          player.score += 2;
          player.correct.push(`3. ${this.vrais.vin3}`);
        }
        if (player.vin4 === this.vrais.vin4) {
          player.score += 2;
          player.correct.push(`4. ${this.vrais.vin4}`);
        }
        if (player.vin4 === this.vrais.vin4_1) {
          player.score += 1;
          player.halfcorrect.push(`4. ${this.vrais.vin4_1}`);
        }
        if (player.vin4 === this.vrais.vin4_2) {
          player.score += 1;
          player.halfcorrect.push(`4. ${this.vrais.vin4_2}`);
        }
        if (player.vin5 === this.vrais.vin5) {
          player.score += 2;
          player.correct.push(`5. ${this.vrais.vin5}`);
        }
        if (player.vin5 === this.vrais.vin5_1) {
          player.score += 1;
          player.correct.push(`5. ${this.vrais.vin5_1}`);
        }
        if (player.vin5 === this.vrais.vin5_2) {
          player.score += 1;
          player.correct.push(`5. ${this.vrais.vin5_2}`);
        }
        if (player.vin6 === this.vrais.vin6) {
          player.score += 2;
          player.correct.push(`6. ${this.vrais.vin6}`);
        }
        if (player.vin7 === this.vrais.vin7) {
          player.score += 2;
          player.correct.push(`7. ${this.vrais.vin7}`);
        }
        if (player.vin8 === this.vrais.vin8) {
          player.score += 2;
          player.correct.push(`8. ${this.vrais.vin8}`);
        }
        points.push([player.nom, player.score, player.correct, player.halfcorrect]);
      });
      return points.sort(this.comparator);
    },
    vrais() {
      return store.state.vrais;
    },
  },
  components: {
    Tabs,
    SweetModal,
  },
};
</script>

<style lang="scss">
.resultat .content ul {
  margin-top: 50px;
  li {
    margin-bottom: 5px;
    .btn {
      margin-right: 30px;
      padding: 7px 0px;
      height: auto;
      line-height: 18px;
      color: #333 !important;
      width: 30%;
    }
  }
}
.tabs {
  position: relative;
  margin: 0 auto;
  display: flex;
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: red;
    transition: transform 0.4s ease, width 0.4s ease;
  }

  &__item {
    flex: 1;
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;

    &_active {
      color: black;
    }

    &:hover {
      // border-bottom: 2px solid gray;
      color: black;
    }

    &:focus {
      background-color: transparent;
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
  .tabs__active-line {
    background-color: #26a69a !important;
  }
}
.bg {
  background-image: url('/redwine.png');
  background-size: cover;
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 500px;
  width: 500px;
}
.player-results {
  position: relative;
  .number {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 21px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    span {
      font-size: 16px;
    }
  }
  .correctwines {
    display: flex;
    margin: 0.7666666667rem 0 0.46rem 0;
    i {
      margin-right: 5px;
    }
  }
}
</style>
