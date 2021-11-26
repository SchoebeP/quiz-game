<template>
  <div id="app">
    <b-container fluid class="page-content">
      <b-row class="overflow-hidden">
        <b-col cols="4" class="p-0 m-auto">
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
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.page-content {
  background: $white;
}

.landing-row {
  justify-content: flex-start !important;
}
</style>
