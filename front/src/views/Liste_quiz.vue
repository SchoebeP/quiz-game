<template>
  <div class="page">
    <div v-for="quiz in quizs" :key="quiz.id">
      <div class="liste" v-if="quiz.category_id == idCategorie">
        <router-link :to="{ name: 'quiz', params: {id: quiz.id} }">
          <div class="quiz">{{ quiz.name }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "liste_quiz",
  data() {
    return {
      idCategorie: null,
      quizs: null,
    };
  },
  mounted() {
    this.idCategorie = this.$route.params.id;
    console.log(this.idCategorie);
    axios
      .get("http://localhost:3000/quiz")
      .then((response) => (this.quizs = response.data));
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/custom.scss";

.page {
  margin: 15%;
}

.liste {
  display: flex;
  align-items: center;
}
.quiz {
  text-align: left;
  font-size: 40px;
  border-bottom: 2px solid $purple;
  padding-bottom: 20px;
  padding-top: 20px;
  color: black;
}
</style>
