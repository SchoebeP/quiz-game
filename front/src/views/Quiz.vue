<template>
  <!-- @todo -->
  <!-- Faire en sorte que les modal ne s'ouvrent pas toutes au click 
  Trouver pourquoi la modale ne se ferme pas -->
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
            <!-- <vodal
              :show="show"
              :mask="mask"
              :animation="rotate"
              @hide="show = false"
            >
              <div class="result-item-popup">
                <h2 class="ri-title">Dommage !</h2>
                <div class="result-item-question">
                  {{ questions[index3].question }}
                </div>
                <div class="result-item-answer-correct ">
                  La bonne réponse était :
                  {{ questions[index3].answer }}
                </div>
                <div class="result-item-answer false">
                  Votre réponse :
                  {{ response }}
                </div>
              </div>
              <b-btn @click="show = false">Fermer</b-btn>
            </vodal>-->
          </div>

          <div
            class="result-item true"
            v-if="response == questions[index3].answer"
          >
            {{ index3 + 1 }}
            <!--
            <vodal
              :show="show"
              :mask="mask"
              animation="rotate"
              @hide="show = false"
            >
              <div class="result-item-popup">
                <h2 class="ri-title">Bien joué</h2>
                <div class="result-item-question">
                  {{ questions[index3].question }}
                </div>
                <div class="result-item-answer-correct true">
                  La bonne réponse était :
                  {{ questions[index3].answer }}
                </div>
              </div>
              <b-btn @click="show = false">Fermer</b-btn>
            </vodal>-->
          </div>
        </li>
      </ol>
      <button class="button" v-on:click="envoyer(idQuiz, listResponse)">
        Sauvegarder le résultat
      </button>
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
      idUser: null,
      questions: null,
      propositions: null,
      checkedResponse: null,
      listResponse: [],
      index: 0,
      afficheResultat: false,
      progress: 0,
      // show: false, @todo a décommenter pour afficher les modal
      mask: false,
      closeOnClickMask: false,
      closeOnEsc: true
    }
  },
  mounted () {
    this.idQuiz = this.$route.params.id
    this.idUser = window.location.search
    axios
      .get('http://localhost:3000/question/' + this.idQuiz)
      .then(response => {
        this.questions = response.data
        this.propositions = this.questions.propositions
      })
  },
  methods: {
    envoyer: function (idQuiz, result) {
      const id = this.idUser.slice(4)
      const results = Object.assign({}, result)
      axios
        .post('http://localhost:3000/quiz/' + idQuiz + '/submit-results', {
          id: id,
          results: results
        })
        .then(response => {
          window.location = 'http://localhost:8081/account/' + this.idUser
        })
    },
    sauvegarder: function (response) {
      if (this.index < 10) this.index = this.index + 1
      if (this.index == 10) this.afficheResultat = true
      this.checkedResponse = null
      this.progress = this.progress + 10
      this.listResponse.push(response)
    },
    retour: function () {
      this.index = this.index - 1
      this.checkedResponse = null
      this.progress = this.progress - 10
      this.listResponse.pop()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom.scss';

.page {
  width: 100%;
}

.wrapper {
  display: flex;
  justify-content: center;
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

// Modale de résultat
.vodal-mask {
  // display: none !important;
}
.vodal-dialog {
  height: fit-content !important;
}

//Result items

.ri-title,
.result-item-question,
.result-item-answer-correct,
.result-item-answer-correct {
  color: $black;
}

.button {
  width: fit-content;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 10px;

  &--retour {
    border: 1px solid $pink;

    &:hover {
      background-color: $pink;
      color: white;
      border-color: $pink;
    }
  }

  &--sauvegarder {
    border: 1px solid $purple;

    &:hover {
      background-color: $purple;
      color: white;
      border-color: $purple;
    }
  }
}
</style>
