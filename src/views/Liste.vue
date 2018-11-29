<template>
  <div class="liste container">
    <p class="left-align pieges" v-scroll-reveal>
      <i class="material-icons left">info_outline</i>Il y a 3 pièges
    </p>
    <ul>
      <li v-scroll-reveal v-for="(pinard, index) of pinards" :key="index">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <div class="activator">
              <img class="image-vin" :src="pinard.img">
              <div class="number red lighten-3 white-text">
                <div class="inner-number">{{index+1}}</div>
              </div>
            </div>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              <strong>{{pinard.name}}</strong>
              <!-- <i class="material-icons right">info_outline</i> -->
            </span>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              <strong>{{pinard.name}}</strong>
              <i class="material-icons right">close</i>
            </span>
            <div class="details">
              <h6 v-if="pinard.name2">{{pinard.name2}}</h6>
              <h5>{{pinard.cepage}}</h5>
              <div class="country-wrap">
                <h6>{{pinard.annee}}</h6>
                <img class="flag" :src="`/flags/${pinard.pays}.svg`" alt>
                <span class="canton" v-if="pinard.canton">{{pinard.canton}}</span>
              </div>
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
.pieges {
  margin-bottom: 20px;
}
.liste .card {
  min-height: 350px;
}
.liste .card-image {
  // display: none;
}
.liste .image-vin {
  height: 250px;
  display: inline-block;
  margin: 5px 0;
  width: auto;
}
.flag {
  width: 30px;
  height: 30px;
  margin: 0px 10px;
}
.country-wrap {
  display: flex;
  align-items: center;
}
.liste .card-reveal .card-title {
  text-align: left;
}
.liste .card-reveal .details {
  text-align: left;
}
.number {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: 'Sedgwick Ave', Helvetica, Arial, sans-serif;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
