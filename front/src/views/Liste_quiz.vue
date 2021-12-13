<template>
  <div class="d-flex ml-5 justify-content-center align-items-start flex-column">
    <section></section>
    <div v-for="quiz in quizs" :key="quiz.id">
      <div class="liste" v-if="quiz.id_categorie == idCategorie">
        <router-link :to="{ name: 'quiz', params: {id: quiz.id} }">
          <div class="quiz">{{ quiz.name }}</div>
        </router-link>
      </div>
    </div>
    <b-row class="w-75 justify-content-end ">
      <Minion title="Quiz" />
    </b-row>
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
      catName: null
    }
  },
  methods: {
    getCatName: function (response) {}
  },

  mounted () {
    this.idCategorie = this.$route.params.id
    axios
      .get('http://localhost:5000/quiz')
      .then(response => (this.quizs = response.data))
    axios
      .get('http://localhost:5000/categories/' + this.idCategorie)
      .then(response => (this.catName = response.data.name))
    console.log(this.catName)
  }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/custom.scss';

.liste {
  display: flex;
  align-items: center;
}
.quiz-item {
  font-size: 2rem;
  border: none;
  border-radius: 12px;
  padding: rem-calc(20) rem-calc(15);
  margin-bottom: 1rem;
  color: black;
  box-shadow: 5px 3px 15px -1px rgba(0, 0, 0, 0.74);

  transition: background-color .2s ease-in-out;
}
  .quiz-title {
    color: $black;
    text-decoration: none !important;
  }

  &:hover {
    background-color: $cyan;
  }

  a {
    text-decoration: none !important;
  }

</style>
