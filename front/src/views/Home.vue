<template>
  <div class="home">
    <b-row>
      <PlayButton msg="Jouer" />
    </b-row>
    <b-row justify-end class="minion_row" >
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
