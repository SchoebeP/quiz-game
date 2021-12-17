<template>
  <div class="page">
    <div class="wrapper-button">
    <b-button
      class="button"
      size="md"
      @click="$router.push('inscription')"
      >Inscription</b-button
    >
    <b-button
      class="button"
      size="md"
      @click="$router.push('connexion')"
      >Connexion</b-button
    >
    </div>
    <div style="justify-content: center; display:flex; align-items: center; height:100vh">
      <PlayButton msg="Jouer" />
    </div>
      <b-row style="position: absolute; bottom: 120px; right: 30px">
        <Minion title="Accueil" />
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PlayButton from "@/components/PlayButton.vue";
import Minion from "../components/Minion.vue";

export default {
  name: "Home",
  components: {
    PlayButton,
    Minion,
  },
};
</script>

<style lang="scss">
@import "/src/assets/scss/custom.scss";

.button {
  background-color: $purple;
  color: black;
  opacity: 0.7;
  margin-right: 10px;
}

.button:hover {
  background: $purple;
  opacity: 1;
}
.page {
  width: 100%;
  height: 100vh;
}

.wrapper-button {
  display: flex;
  justify-content: right;
  margin-top: 20px;
}

.minion_row {
  position: fixed;
  bottom: 2rem;
  right: 7rem;
}
</style>
