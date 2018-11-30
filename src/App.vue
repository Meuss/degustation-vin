<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link>
      <span>|</span>
      <router-link to="/liste">Liste</router-link>
      <span>|</span>
      <router-link to="/choisir">Choix</router-link>
    </div>
    <transition @enter="enter" @leave="leave" appear mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { TimelineLite, Power4 } from 'gsap';

export default {
  name: 'App',
  methods: {
    enter(el, done) {
      const tl = new TimelineLite();
      tl.fromTo('.container', 0.2, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power4.easeInOut, onComplete: done }, 0);
    },
    // =====================================================
    // LEAVE ANIMATION
    // =====================================================
    leave(el, done) {
      const tl = new TimelineLite();
      tl.fromTo('.container', 0.2, { autoAlpha: 1 }, { autoAlpha: 0, ease: Power4.easeInOut, onComplete: done }, 0);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Source Sans Pro', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  span {
    margin: 0 10px;
  }
}
.toasted.bubble {
  background-color: #ef5350 !important;
}
</style>
