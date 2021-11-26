<template>
  <div>
    <div class="liste" v-for="(question,index) in questions" :key="question.id">
      <div v-if="question.id_quiz == idQuiz">
        {{ question.question }}
      </div>
      <div v-if="question.id_quiz == idQuiz">
        <div v-for="(proposition, index2) in question.propositions" >
          <input
            type="radio"
            v-bind:value="proposition"
            v-bind:name="question.id"
            v-bind:id="index+index2"
          />
          <span>{{ proposition }}</span>
         
        </div>
         <b-button v-on:click="sauvegarder(index)"> Valider </b-button>
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
      propositions: null,
    };
  },
  mounted() {
    this.idQuiz = this.$route.params.id;
    axios
      .get("http://localhost:5000/question/" + this.idQuiz)
      .then((response) => {
        this.questions = response.data;
        this.propositions = this.questions.propositions;
      });
  },
  methods: {
    sauvegarder: function (proposition) {
      console.log(document.getElementById(proposition).value);
    },
  },
};
</script>

<style lang="scss" scoped>
.liste {
  border: 1px solid black;
  padding: 5px;
  border-radius: 20px;
  margin: 10px 50px;
}
</style>