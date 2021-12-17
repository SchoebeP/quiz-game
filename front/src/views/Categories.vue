<template>
  <div>
    <b-row
      class="justify-content-center align-content-center m-0 categories-list p-5 "
    >
      <div
        id="v-cats"
        class="
          col-6
          col-md-3
          category-item
          d-flex
          flex-column
          justify-content-center
          p-0
        "
        v-for="categorie in categories"
        :key="categorie.id"
      >
        <router-link :to="{ name: 'liste_quiz', params: { id: categorie.id }}">
          <div>
            <img
              class="cat_img"
              :src="tabIcon[categorie.id - 1]"
              width="200px"
              alt=""
            />
            <p class="cat_name">
              {{ categorie.name }}
            </p>
          </div>
        </router-link>
      </div>
    </b-row>
     <div style="position: absolute; bottom: 120px; right: 0">
      <b-row class="w-75 justify-content-end">
        <Minion title="Quiz" />
      </b-row>
    </div>
  </div>
</template>

<script>
import sport from '../assets/img/sport.png'
import musique from '../assets/img/musique.png'
import cinema from '../assets/img/cinema.png'
import informatique from '../assets/img/informatique.png'
import animaux from '../assets/img/animaux.png'
import culture from '../assets/img/culture.png'

import axios from 'axios'

export default {
  name: 'Categorie',

  data () {
    return {
      tabIcon: [informatique, musique, animaux, sport, culture, cinema],
      categories: null
    }
  },

  components: {},
  methods: {},
  mounted () {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => (this.categories = response.data));
  },
};
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/custom.scss';

.categories-list {
  gap: 1rem;
}

.cat_name {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 43%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5rem;
  transition: all 0.2s linear;
  color: transparent;
}

.cat_img {
  transition: all 0.25s ease-in-out;
}

.category-item {
  flex-basis: 33.33333%;
  position: relative;
  top: 0;
  z-index: 3;

  &:hover {
    .cat_img {
      filter: blur(0.1rem) brightness(0.69);
      transform: rotate(10deg);
    }

    .cat_name {
      color: $white;
      font-weight: 800;
    }
  }

  &:active {
    .cat_img {
      transform: scale(0.9);
    }
  }
}
</style>
