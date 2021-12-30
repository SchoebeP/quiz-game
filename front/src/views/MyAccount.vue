<template>
  <div style="width: 100%; margin-top: 20px">
    <h1 style="text-align: center">
      Bienvenue sur votre compte {{ this.user.fullname }}
    </h1>
    <h3> Résultat </h3>
    {{this.user}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Account",
  data() {
    return {
      idUser: null,
      user: {},
    };
  },
  mounted() {
    this.idUser = window.location.search.slice(4);
    axios
      .get("http://localhost:3000/users/" + this.idUser)
      .then((response) => (this.user = response.data));
  },
};
</script>

<style lang="scss" scoped>
</style>