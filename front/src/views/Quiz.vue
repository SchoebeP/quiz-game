<template>
  <div style="width:100%">
    <div class="liste" v-if="afficheResultat == false">
      <progress :value="progress" max="100">70 %</progress>
      <div class="question" v-if="questions[index].quiz_id == idQuiz">
        {{ questions[index].question }}
      </div>
      <div v-if="questions[index].quiz_id == idQuiz">
        <div
          v-for="(proposition, index2) in questions[index].propositions"
          :key="proposition"
        >
          <label class="rad-label">
            <input
              type="radio"
              class="rad-input"
              v-bind:id="index2"
              v-bind:value="proposition"
              v-model="checkedResponse"
            />
            <div class="rad-design"></div>
            <div class="rad-text">{{ proposition }}</div>
          </label>
        </div>
        <div v-if="checkedResponse !== null">
          <div class="button" v-on:click="sauvegarder(checkedResponse)">
            Valider
          </div>
        </div>
      </div>
    </div>
    <div v-if="afficheResultat == true">
      Resultat
      <div v-for="(response, index3) in listResponse">
        <div
          style="background-color: red"
          v-if="response !== questions[index3].answer"
        >
          {{ questions[index3].question }}
        </div>
        <div
          style="background-color: green"
          v-if="response == questions[index3].answer"
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
      progress: 0,
    };
  },
  mounted() {
    this.idQuiz = this.$route.params.id;
    axios
      .get("http://localhost:3000/question/" + this.idQuiz)
      .then((response) => {
        this.questions = response.data;
        this.propositions = this.questions.propositions;
      });
  },
  methods: {
    sauvegarder: function (response) {
      if (this.index < 10) this.index = this.index + 1;
      if (this.index == 10) this.afficheResultat = true;
      this.checkedResponse = null;
      this.progress = this.progress + 10;
      this.listResponse.push(response);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/custom.scss";

progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;
  width: 60%;
  height: 10px;
  margin-bottom: 10px;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
  background: $purple;
  border-radius: 10px;
  background-size: 35px 20px, 100% 100%, 100% 100%;
}

.liste {
  border-radius: 46px;
  background: #ffffff;
  box-shadow: 14px 14px 47px #b8b8b8, -14px -14px 47px #ffffff;
  margin: 100px 30px;
  padding: 30px;
}

.question {
  font-size: 24px;
}
.rad-label {
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 14px 16px;
  margin: 10px 0;

  cursor: pointer;
  transition: 0.3s;
}

.rad-label:hover,
.rad-label:focus-within {
  background: hsla(0, 0%, 80%, 0.14);
}

.rad-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
}

.rad-design {
  width: 18px;
  height: 18px;
  border-radius: 100px;

  background: $gradient;
  position: relative;
}

.rad-design::before {
  content: "";

  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: inherit;

  background: hsl(0, 0%, 90%);
  transform: scale(1.1);
  transition: 0.3s;
}

.rad-input:checked + .rad-design::before {
  transform: scale(0);
}

.rad-text {
  color: hsl(0, 0%, 60%);
  margin-left: 14px;
  letter-spacing: 3px;
  font-size: 14px;
  font-weight: 900;
  transition: 0.3s;
}

.rad-input:checked ~ .rad-text {
  color: hsl(0, 0%, 40%);
}

.button {
  border: 1px solid $purple;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 0 auto;
  cursor: pointer;
}

.button:hover {
  background-color: $purple;
  color: white;
  border-color: $purple;
}
</style>