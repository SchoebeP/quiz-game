<template>
  <div>
    <div class="liste" v-if="afficheResultat == false">
      <div v-if="questions[index].id_quiz == idQuiz">
        {{ questions[index].question }}
      </div>
      <div v-if="questions[index].id_quiz == idQuiz">
        <div
          v-for="(proposition, index2) in questions[index].propositions"
          :key="proposition"
        >
          <input
            type="radio"
            v-bind:value="proposition"
            v-bind:id="index2"
            v-model="checkedResponse"
          />
          <label :for="index2">{{ proposition }}</label>
        </div>
        <b-button v-on:click="sauvegarder(checkedResponse)"> Valider </b-button>
      </div>
    </div>
    <div v-if="afficheResultat == true">
      Resultat
      <div v-for="(response, index3) in listResponse">
        <div
          style="background-color: red"
          v-if="response !== questions[index3].réponse"
        >
          {{ questions[index3].question }}
        </div>
        <div
          style="background-color: green"
          v-if="response == questions[index3].réponse"
        >
          {{ questions[index3].question }}
        </div>
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
      checkedResponse: null,
      listResponse: [],
      index: 0,
      afficheResultat: false,
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
    sauvegarder: function (response) {
      if (this.index < 10) this.index = this.index + 1;
      if (this.index == 10) this.afficheResultat = true;
      console.log(response);
      this.listResponse.push(response);
      console.log(this.listResponse);
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