<template>
  <div>
{{idQuiz}}
    <div v-for="question in questions" :key="question.id">
        {{question.id_quiz}}
      <div class="liste" v-if="question.id_quiz == 3">
        {{ question }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "quiz",

  data() {
    return {
      idQuiz: null,
      questions: null,
    };
  },
  mounted() {
    this.idQuiz = this.$route.params.id;
    console.log(this.idQuiz);
    axios
      .get("http://localhost:5000/question/")
      .then((response) => (this.questions = response.data));
  },
};
</script>

<style lang="scss" scoped>
</style>