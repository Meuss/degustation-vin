<template>
  <div class="loading container">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    <div class="fake-texts">
      <div
        class="text"
        v-for="(text, index) in texts"
        :key="index"
        :class="{done: text.done, showing: text.showing}"
      >
        <div class="icons">
          <i class="material-icons teal-text text-lighten-2">check_box</i>
          <div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-green-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="gap-patch">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <h6>{{text.text}}</h6>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store';
export default {
  name: 'Loading',
  data() {
    return {
      texts: [
        { text: 'Connexion au serveur', showing: false, done: false },
        { text: 'Compressions des données', showing: false, done: false },
        { text: 'Envoi des résultats à la mère à Matteo', showing: false, done: false },
        { text: 'Préparation de la publication sur ton profil facebook', showing: false, done: false },
        { text: 'Comparaison des résultats', showing: false, done: false },
        { text: "Omg t'as fait tout faux", showing: false, done: false },
      ],
    };
  },
  mounted() {
    const interval = 3000;
    let itemsProcessed = 0;
    const length = this.texts.length;
    this.texts.forEach(function(el, index) {
      setTimeout(function() {
        itemsProcessed += 1;
        el.showing = true;
        el.done = true;
        if (itemsProcessed === length) {
          setTimeout(function() {
            store.commit('finished', true);
          }, 3000);
        }
      }, index * interval);
    });
  },
};
</script>

<style lang="scss" scoped>
.text {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  .preloader-wrapper.small {
    width: 20px;
    height: 20px;
  }
  h6 {
    width: calc(100% - 50px);
    margin: 0;
  }
  .icons {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      opacity: 0;
      position: absolute;
      transition: opacity 0.3s ease 2s;
    }
    .preloader-wrapper {
      position: absolute;
      transition: opacity 0.3s ease 2s;
    }
  }
  &.showing {
    opacity: 1;
  }
  &.done {
    .icons i {
      opacity: 1;
    }
    .preloader-wrapper {
      opacity: 0;
    }
  }
}
</style>
