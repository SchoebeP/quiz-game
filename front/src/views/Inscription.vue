<template>
  <div class="wrapper">
    <input v-model="fullname" placeholder="Nom Prénom" />
    <input v-model="username" placeholder="Username" />
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Mot de passe" type="password" />
    <b-button
      class="button"
      size="lg"
      @click="inscription(fullname, username, email, password)"
      >Inscription</b-button
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "inscription",
  data() {
    return { fullname: null, username: null, email: null, password: null };
  },
  methods: {
    inscription: function (fullname, username, email, password) {
      axios
        .post("http://localhost:3000/users/register", {
          fullname: fullname,
          username: username,
          email: email,
          password: password,
        })
        .then(function () {
         window.location="http://localhost:8080/connexion"
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/custom.scss';

.button {
  background: $purple;
  color:black;
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