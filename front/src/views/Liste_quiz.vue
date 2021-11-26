<template>
  <div>
    <h1>Liste des quiz</h1>
    <div v-for="quiz in quiz" :key="quiz.id">
      {{ quiz.name }}
    </div>
  </div>
</template>

<script>
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
      .get("http://localhost:8080/quiz", { params: { id: this.idCategorie } })
      .then((response) => (this.quizs = response.data));
    console.log(this.quizs);
  },
};
</script>

<style lang="scss" scoped>
</style>
