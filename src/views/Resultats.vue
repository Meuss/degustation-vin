<template>
  <div class="resultat container">
    <div class="row">
      <div class="col s12">
        <h3>Résultats</h3>
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
            <div v-for="joueur in joueurs" :key="joueur.id">
              <p><strong>{{joueur.nom}}: </strong>{{joueur.vin1}}</p>
            </div>
          </div>
          <div v-if="currentTab === 'tab2'">
            <div v-for="joueur in joueurs" :key="joueur.id">
              <p><strong>{{joueur.nom}}: </strong>{{joueur.vin2}}</p>
            </div>
          </div>
          <div v-if="currentTab === 'tab3'">
            <div v-for="joueur in joueurs" :key="joueur.id">
              <p><strong>{{joueur.nom}}: </strong>{{joueur.vin3}}</p>
            </div>
          </div>
          <div v-if="currentTab === 'tab4'">
            <div v-for="joueur in joueurs" :key="joueur.id">
              <p><strong>{{joueur.nom}}: </strong>{{joueur.vin4}}</p>
            </div>
          </div>
          <div v-if="currentTab === 'tab5'">
            <div v-for="joueur in joueurs" :key="joueur.id">
              <p><strong>{{joueur.nom}}: </strong>{{joueur.vin5}}</p>
            </div>
          </div>
          <div v-if="currentTab === 'tab6'">
            <div v-for="joueur in joueurs" :key="joueur.id">
              <p><strong>{{joueur.nom}}: </strong>{{joueur.vin6}}</p>
            </div>
          </div>
          <div v-if="currentTab === 'tab7'">
            <div v-for="joueur in joueurs" :key="joueur.id">
              <p><strong>{{joueur.nom}}: </strong>{{joueur.vin7}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from 'vue-tabs-with-active-line';
import db from '@/firebase/init';

export default {
  name: 'Resultats',
  data() {
    return {
      joueurs: [],
      vrai: {
        vin1: 'Chasse-Spleen',
        vin2: 'Château le Rosey',
        vin3: 'Château le Rosey',
        vin4: 'Château le Rosey',
        vin5: 'Château le Rosey',
        vin6: 'Château le Rosey',
        vin7: 'Château le Rosey',
      },
      tabs: [
        { title: 'Vin 1', value: 'tab1' },
        { title: 'Vin 2', value: 'tab2' },
        { title: 'Vin 3', value: 'tab3' },
        { title: 'Vin 4', value: 'tab4' },
        { title: 'Vin 5', value: 'tab5' },
        { title: 'Vin 6', value: 'tab6' },
        { title: 'Vin 7', value: 'tab7' },
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
          });
        }
      });
    });
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
  components: {
    Tabs,
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;
  margin: 0 auto;

  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }

  &__item {
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
      border-bottom: 2px solid gray;
      color: black;
    }

    &:focus {
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
}
</style>
