<template>
  <div class="home">
    <PlayButton msg="Jouer" />
  </div>
</template>

<script>
// @ is an alias to /src

import PlayButton from '@/components/PlayButton.vue'

export default {
  name: 'Home',
  components: {
    PlayButton
  }
}
</script>

<style lang="scss">
@import '/src/assets/scss/custom.scss';
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: $gradient;
}
</style>
