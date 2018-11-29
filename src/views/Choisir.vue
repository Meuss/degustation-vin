<template>
  <div class="choisir">
    <keep-alive>
      <Form/>
    </keep-alive>
  </div>
</template>
<script>
import Form from '@/components/Form.vue';

export default {
  name: 'Choisir',
  components: {
    Form,
  },
};
</script>

<style lang="scss" scoped>
</style>
