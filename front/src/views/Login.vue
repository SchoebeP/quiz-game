<template>
  <div class="wrapper">
    <input v-model="username" placeholder="Nom d'utilisateur" />
    <input v-model="password" placeholder="Mot de passe" type="password" />
    <b-button class="button" size="lg" @click="connexion(username, password)"
      >Connexion</b-button
    >

    {{ this.erreur }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {},
  name: 'connexion',
  data () {
    return { username: null, password: null, erreur: '', id: null }
  },
  methods: {
    connexion: function (username, password) {
      axios
        .post('http://localhost:3000/users/authenticate', {
          username: username,
          password: password
        })
        .then(function (response) {
          window.location = 'http://localhost:8081/?id=' + response.data.id
        })
        .catch(() => (this.erreur = 'Mot de passe ou username invalid'))
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/custom.scss';

.button {
  background: $purple;
  color: black;
  opacity: 0.7;
}
.button:hover {
  background: $purple;
  opacity: 1;
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
}
input {
  font-size: 14px;
  margin-bottom: 20px;
  border: 2px solid $cyan;
  border-radius: 10px;
  padding: 0.4rem;
  &:active {
    border-color: $purple;
  }
}
</style>
