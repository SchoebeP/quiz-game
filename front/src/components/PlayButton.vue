<template>
  <b-button class="cta" size="lg">{{ msg }}</b-button>
</template>

<script>
export default {
  name: 'PlayButton',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/custom.scss';

.cta {
  padding: 1rem 3rem;

  background-color: $purple;

  &:hover {
    background-color: $blue;
  }
}
</style>
