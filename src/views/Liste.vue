<template>
  <div class="liste container">
    <h3>Liste</h3>
    <ul>
      <li v-for="(pinard, index) of pinards" :key="index">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <div class="activator">
              <img class="image-vin" :src="pinard.img">
            </div>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"><strong>{{pinard.name}}</strong><i class="material-icons right">info_outline</i></span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"><strong>{{pinard.name}}</strong><i class="material-icons right">close</i></span>
            <div class="details">
              <h6 v-if="pinard.name2">{{pinard.name2}}</h6>
              <h5>{{pinard.cepage}}</h5>
              <div class="country-wrap">
                <img class="flag" :src="`/flags/${pinard.pays}.svg`" alt="">
                <span class="canton" v-if="pinard.canton">{{pinard.canton}}</span>
              </div>
              <h6>{{pinard.annee}}</h6>
              <p v-if="pinard.description">{{pinard.description}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import store from '@/store';

export default {
  name: 'Liste',
  computed: {
    pinards() {
      return store.state.pinards;
      // return store.state.orderedPinards;
    },
  },
};
</script>

<style lang="scss" scoped>
.liste .image-vin {
  height: 250px;
  display: inline-block;
  margin: 5px 0;
  width: auto;
}
.flag {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.country-wrap {
  display: flex;
  align-items: center;
}
.liste .card-reveal .card-title {
  text-align: left;
}
.liste .card-reveal .details {
  // padding-right: 39px;
  text-align: left;
}
</style>
