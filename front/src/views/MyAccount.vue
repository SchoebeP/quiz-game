<template>
  <div style="width: 100%; margin-top: 20px">
    <button class="logout" v-on:click="deconnexion()">Deconnexion</button>
    <h1 style="text-align: center" class="font-weight-bold">
      Bienvenue, {{ this.user.fullname }}
    </h1>
    <section class="user-infos">
      <h2>Vos informations</h2>
      <span class="user-infos-item">
        <span class="font-weight-bold">
          {{ this.user.fullname }}
        </span>
      </span>
      <span class="user-infos-item">
        Pseudo :
        <span class="font-weight-bold"> {{ this.user.username }} </span>
      </span>
      <span class="user-infos-item">
        Email :
        <span class="font-weight-bold"> {{ this.user.email }} </span>
      </span>
    </section>
    <section class="user-score">
      <h2>Vos résultats</h2>
      <span class="user-infos-item">
        <span v-for="result in tabResult">
          <div>
            {{ result.quiz.name }}
            <span class="font-weight-bold"> {{ result.score }}/10 </span>
          </div>
        </span>
      </span>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Account',
  data () {
    return {
      idUser: null,
      user: {},
      tabResult: []
    }
  },
  mounted () {
    this.idUser = window.location.search.slice(4)
    axios
      .get('http://localhost:3000/users/' + this.idUser)
      .then(response => (this.user = response.data))
    axios
      .get('http://localhost:3000/users/my-results/' + this.idUser)
      .then(response => (this.tabResult = response.data))
  },
  methods: {
    deconnexion: function () {
      axios
        .get('http://localhost:3000/users/logout')
        .then(response => console.log(response))
      window.location = 'http://localhost:8081/'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/custom.scss';

.logout {
  background: $purple;
  color: $white;
  opacity: 0.7;
  padding: 0.3rem;
  border-radius: 11px;
  transition: all 0.2s ease-in-out;
}
.logout:hover {
  background: $purple;
  opacity: 1;
}

.user-infos {
  margin: auto;
  margin-top: 2rem;
  background: $cyan;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  border-radius: 12px;
}

.user-score {
  margin: auto;
  margin-top: 2rem;
  background: $purple;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  border-radius: 12px;
}
</style>
