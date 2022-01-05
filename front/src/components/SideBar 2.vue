<template>
  <div id="nav" class="p-0">
    <Logo />
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "SideBar",
  components: {
    Logo,
  },
  

  methods: {},
   
};
</script>

<style lang="scss">
/* eslint-disable */
@import 'src/assets/scss/custom.scss';

#nav {
  padding: 30px;
  position: fixed;
  width: 33%;
  top: 0;
  left: 0;
  height: 100vh;
  background: $gradient;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
