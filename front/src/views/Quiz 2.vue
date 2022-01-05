<template>
  <div class="page">
    <div class="liste" v-if="afficheResultat == false">
      <progress :value="progress" max="100"></progress>
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
        <div class="wrapper">
          <div
            v-if="index > 0"
            class="button button--retour"
            v-on:click="retour()"
          >
            Retour
          </div>
          <div v-if="checkedResponse !== null">
            <div
              class="button button--sauvegarder"
              v-on:click="sauvegarder(checkedResponse)"
            >
              Valider
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="afficheResultat == true">
      <h1>Résultats</h1>
      <ol class="results">
        <li
          class="result-item-wrapper"
          v-for="(response, index3) in listResponse"
        >
          <div
            class="result-item wrong"
            v-if="response !== questions[index3].answer"
          >
            {{ index3 + 1 }}
            <vodal :show="show" animation="zoom" @hide="show = false">
              <v-container>
                <v-row>
                  <v-col>
                    <h1>Question n°{{ index3 }}</h1>
                    <p>{{ questions[index3].answer }}</p>
                    <p class="false">{{ response }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </vodal>
          </div>
          <div
            class="result-item true"
            v-if="response == questions[index3].answer"
            @click="show = !show"
          >
            {{ index3 + 1 }}
            <vodal :show="show" animation="zoom" @hide="show = false">
              <v-container>
                <v-row>
                  <v-col>
                    <h1>Question n°{{ index3 }}</h1>
                    <p>{{ questions[index3].answer }}</p>
                    <p class="true-text">{{ response }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </vodal>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'quiz',

  data () {
    return {
      idQuiz: null,
      questions: null,
      propositions: null,
      checkedResponse: null,
      listResponse: [],
      index: 0,
<<<<<<< HEAD
      afficheResultat: false,
      progress: 0,
<<<<<<< dev
    };
=======
      afficheResultat: false
=======
      show: false
>>>>>>> Result Modal start
    }
>>>>>>> 1079d215930276e209fe632a504d53abdb9c62d0
  },
  mounted () {
    this.idQuiz = this.$route.params.id
    axios
<<<<<<< HEAD
      .get("http://localhost:3000/question/" + this.idQuiz)
      .then((response) => {
        this.questions = response.data;
        this.propositions = this.questions.propositions;
        console.log(this.questions)
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
=======
      .get('http://localhost:3000/question/' + this.idQuiz)
      .then(response => {
        this.questions = response.data
        this.propositions = this.questions.propositions
      })
  },
  methods: {
    sauvegarder: function (response) {
      if (this.index < 2) this.index = this.index + 1
      if (this.index == 2) this.afficheResultat = true
      this.checkedResponse = null
      this.listResponse.push(response)
    }
  }
}
>>>>>>> 1079d215930276e209fe632a504d53abdb9c62d0
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/custom.scss';

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

.results {
  list-style: none;
  counter-reset: counter;
  margin-top: 2rem;
  .result-item-wrapper {
    counter-increment: counter;
    margin: 0.25rem;
    display: inline-block;
  }
}

.result-item {
  &:hover {
    -webkit-animation: shadow-drop-center 0.4s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  width: 10rem;
  height: 10rem;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  margin: 0 1rem;
  font-size: 2rem;
  flex-basis: 20%;
  margin-bottom: 2rem;
}

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

=======
>>>>>>> 1079d215930276e209fe632a504d53abdb9c62d0

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
  content: '';

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
  width: fit-content;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 0 auto;
  cursor: pointer;
}
  cursor: pointer;
  margin-right: 10px;

.button:hover {
  background-color: $purple;
  color: white;
  border-color: $purple; 
}
</style>
