<template>
  <div class="page">
    <div class="buttons">
      <div class="wrapper-button" v-if="idUser == ''">
        <b-button
          class="acc-button"
          size="md"
          @click="$router.push('inscription')"
          >Inscription</b-button
        >
        <b-button
          class="acc-button"
          size="md"
          @click="$router.push('connexion')"
          >Connexion</b-button
        >
      </div>
      <div v-else class="wrapper-button">
        <b-button class="acc-button" size="md" @click="compte()"
          >Mon compte</b-button
        >
      </div>
    </div>

    <div
      v-if="idUser !== ''"
      style="
        justify-content: center;
        display: flex;
        align-items: center;
        height: 100vh;
      "
    >
      <button
        class="cta glow-on-hover"
        size="lg"
        @click="categorieFunction(idUser)"
      >
        Jouer
      </button>
    </div>
    <div
      v-else
      style="
        justify-content: center;
        display: flex;
        align-items: center;
        height: 100vh;
      "
    >
      <button
        class="cta glow-on-hover"
        size="lg"
        @click="categorieFunction('')"
      >
        Jouer
      </button>
    </div>
    <b-row style="position: absolute; bottom: 120px; right: 30px">
      <Minion title="Accueil" />
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

import Minion from '../components/Minion.vue'

export default {
  name: 'Home',
  components: {
    Minion
  },
  data () {
    return {
      idUser: null
    }
  },
  mounted () {
    this.idUser = window.location.search
    console.log(this.idUser)
  },
  methods: {
    compte: function () {
      window.location = 'http://localhost:8081/account/' + this.idUser
    },
    categorieFunction: function (idUser) {
      window.location = 'http://localhost:8081/categories/' + idUser
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/custom.scss';
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.buttons {
  position: fixed;
  right: 0;
}

.button,
.btn {
  background-color: $purple;
  color: $white !important;
}

.acc-button {
  background: $purple !important;
  margin: 0.2rem 0.5rem;
  transition: all 0.2s ease-in-out;
  filter: opacity(1);
  &:hover {
    filter: opacity(0.8);
  }
}
.glow-on-hover {
  width: 10rem;
  height: 6rem;
  border: none;
  outline: none;
  color: $white;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  transition: all 0.18s ease-in-out;

  text-transform: uppercase;
  font-weight: 800;
}

.glow-on-hover:before {
  content: '';
  background: $gradient;
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: $gradient;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
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
