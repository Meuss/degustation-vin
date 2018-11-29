<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link>
      <span>|</span>
      <router-link to="/liste">Liste</router-link>
      <span>|</span>
      <router-link to="/choisir">Choix</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 50px;
  min-height: 100vh;
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
