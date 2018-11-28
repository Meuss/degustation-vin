<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <iframe src="https://giphy.com/embed/k9yjgF1I7mX0k" width="320" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
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
