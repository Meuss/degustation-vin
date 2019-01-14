<template>
  <div class="home container">
    <div class="row">
      <div class="col s12">
        <h4>Bienvenue</h4>
        <div class="row">
          <div class="col l2 offset-l5 s6 offset-s3">
            <img src="/const.jpg" alt>
          </div>
        </div>
        <h4>Master oenologue!</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  margin: 0 auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #4db6ac;
}
</style>
