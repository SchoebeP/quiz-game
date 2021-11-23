<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col cols="4" class="p-0">
          <SideBar/>
        </b-col>
        <b-col class="p-0">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
  name:"app",
  components: {
    SideBar
  }
}
</script>

<style lang="scss">
@import '/src/assets/scss/custom.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.landing-row {
  justify-content: flex-start !important;
}
</style>
