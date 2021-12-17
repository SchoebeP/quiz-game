<template>
  <div>
    <form @submit="inscription">
      <div class="wrapper">
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
        />
        {{fullName}}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
        />
        <input type="email" id="mail" name="email" placeholder="Mail" />
        <input
          type="pasword"
          id="pasword"
          name="password"
          placeholder="Mot de passe"
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "inscription",
  data: {
    fullName: null,
    name: null,
    email: null,
  },
  methods: {
    inscription: function (fullName, username, email, password) {
      axios
        .post("http://localhost:3000/register", {
          fullName: fullName,
          username: username,
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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