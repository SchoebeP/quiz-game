<template>
  <div class="wrapper">
    <input v-model="username" placeholder="Username" />
    <input v-model="password" placeholder="Mot de passe" type="password" />
    <b-button class="button" size="lg" @click="connexion(username, password)"
      >Connexion</b-button
    >

    {{ this.erreur }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {},
  name: "connexion",
  data() {
    return { username: null, password: null, erreur: "", id: null };
  },
  methods: {
    connexion: function (username, password) {
      axios
        .post("http://localhost:3000/users/authenticate", {
          username: username,
          password: password,
        })
        .then(function (response) {
          window.location = "http://localhost:8080/?id="+ response.data.id;
        })
        .catch(() => (this.erreur = "Mot de passe ou username invalid"));
    },
    
  },
};

</script>

<style lang="scss" scoped>
@import "/src/assets/scss/custom.scss";

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
  margin: 30px auto;
}
input {
  margin-bottom: 20px;
}
</style>