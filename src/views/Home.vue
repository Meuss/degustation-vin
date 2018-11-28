<template>
  <div class="home">
    <Home msg="Dégustation!"/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
  name: 'home',
  components: {
    Home,
  },
};
</script>
<style lang="scss">
.home {
  img {
    // height: 200px;
  }
}
</style>
