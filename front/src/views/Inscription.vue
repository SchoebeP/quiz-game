<template>
  <div>
    <form>
      <div class="wrapper">
        <input type="text" id="name" name="user_name" placeholder="Nom" />
        <input
          type="text"
          id="prenom"
          name="user_prenom"
          placeholder="Prénom"
        />
        <input type="email" id="mail" name="user_mail" placeholder="Mail" />
        <input
          type="pasword"
          id="pasword"
          name="user_pasword"
          placeholder="Mot de passe"
        />
      </div>
      <button type="submit">Inscription</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "inscription",
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