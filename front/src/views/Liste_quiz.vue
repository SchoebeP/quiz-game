<template>
  <div style="width: 100%">
    <div class="d-flex mt-5 ml-5 flex-column liste">
      <img
        v-if="idCategorie == 1"
        width="200"
        src="../assets/img/informatique.png"
        style="margin: 0 auto"
      />
      <img
        v-else-if="idCategorie == 2"
        width="200"
        src="../assets/img/musique.png"
        style="margin: 0 auto"
      />
      <img
        v-else-if="idCategorie == 3"
        width="200"
        src="../assets/img/animaux.png"
        style="margin: 0 auto"
      />
      <img
        v-else-if="idCategorie == 4"
        width="200"
        src="../assets/img/sport.png"
        style="margin: 0 auto"
      />
      <img
        v-else-if="idCategorie == 5"
        width="200"
        src="../assets/img/culture.png"
        style="margin: 0 auto"
      />
      <img
        v-else="idCategorie == 6"
        width="200"
        src="../assets/img/cinema.png"
        style="margin: 0 auto"
      />

      <div v-for="quiz in quizs" :key="quiz.id">
        <div class="liste" v-if="quiz.category_id == idCategorie">
          <button @click="quizFunction(quiz.id)">
            <div class="quiz-item">{{ quiz.name }}</div>
          </button>
        </div>
      </div>
    </div>
    <div style="position: absolute; bottom: 120px; right: 0">
      <b-row class="w-75 justify-content-end">
        <Minion title="Quiz" />
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'liste_quiz',
  data () {
    return {
      idCategorie: null,
      quizs: null,
      idUser: null
    }
  },
  methods: {
    quizFunction: function (idquiz) {
      window.location = 'http://localhost:8081/quiz/' + idquiz + this.idUser
    }
  },
  mounted () {
    this.idCategorie = this.$route.params.id
    this.idUser = window.location.search
    axios
      .get('http://localhost:3000/quiz')
      .then(response => (this.quizs = response.data))
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/custom.scss';

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.liste {
  margin: 10px;
}

.quiz-item {
  width: fit-content;
  font-size: 2rem;
  border: none;
  border-radius: 32px;
  padding: rem-calc(20) rem-calc(15);
  margin-bottom: 1rem;
  color: black;
  box-shadow: 5px 3px 15px -1px rgba(0, 0, 0, 0.74);
}

.quiz-item:hover {
  background: $gradient;
  color: #fff;
}

a {
  text-decoration: none !important;
}
</style>
