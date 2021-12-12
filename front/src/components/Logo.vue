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
  methods: {
    redirectToHome () {
      this.$router.push({ path: '/' })
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
