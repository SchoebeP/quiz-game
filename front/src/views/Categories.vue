<template>
  <div>
    <b-row
      class="justify-content-center align-content-center m-0 categories-list"
    >
      <img src="/src/assets/img/sport.png" alt="" />
      <div
        id="v-cats"
        class="
          col-3
          category-item
          d-flex
          flex-column
          justify-content-center
          p-0
        "
        v-for="categorie in categories"
        :key="categorie.id"
      >
        <div>
          <div>
            <img :src="tabIcon[categorie.id - 1]" width="50px" alt="" />
          </div>
          <p>
            {{ categorie.name }}
          </p>
        </div>
      </div>
    </b-row>    
  </div>
</template>

<script>
import sport from "../assets/img/sport.png";
import musique from "../assets/img/musique.png";
import cinema from "../assets/img/cinema.png"
import informatique from "../assets/img/sport.png"
import animaux from "../assets/img/sport.png"
import culture from "../assets/img/sport.png"
  import axios from "axios";

export default {
  name: "Categorie",
    data() {
    return {
      tabIcon: [informatique, musique, animaux, sport, culture, cinema],
      categories: null,
    };
  },
  components: {},
  methods: {},
  mounted() {
    axios
      .get("http://localhost:8080/categories")
      .then((response) => (this.categories = response.data));
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/custom.scss";

.categories-list {
  gap: 1rem;
}

.category-item {
  flex-basis: 33.33333%;
  border-radius: 12px;
  border: 2px solid black;
  background: $white;
}
</style>
