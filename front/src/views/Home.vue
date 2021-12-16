<template>
  <div class="home w-100">
    <b-row>
      <PlayButton msg="Jouer" />
    </b-row>
    <b-row style="position:absolute; bottom:120px; right:30px">
      <Minion title="Accueil"/>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

import PlayButton from '@/components/PlayButton.vue'
import Minion from '../components/Minion.vue'

export default {
  name: 'Home',
  components: {
    PlayButton,
    Minion,
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh !important; 
}

.minion_row {
  position: fixed;
  bottom: 2rem;
  right: 7rem;

}
</style>
