<template>
  <div class="logo-wrapper pt-5">
    <a @click="redirectToHome()">
      <img class="logo" src="../assets/img/logo.png" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Logo',
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
    redirectToHome () {
       window.location = "http://localhost:8080/" + this.idUser;
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
  width: 50%;
  height: auto;
}
</style>
