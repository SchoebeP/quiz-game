<template>
  <div>
    <h1>Categories</h1>
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
        v-for="cat in cats"
        :key="cat.id"
      >
        <div>
          <div>
            <img :src="tabIcon[cat.id - 1]" width="50px" alt="" />
          </div>
          <p>
            {{ cat.title }}
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

export default {
  data() {
    return {
      tabIcon: [informatique, musique, animaux, sport, culture, cinema],
      cats: [
        {
          id: "1",
          title: "Informatique",
        },
        {
          id: "2",
          title: "Musique",
        },
        {
          id: "3",
          title: "Animaux",
        },
        {
          id: "4",
          title: "Sport",
        },
        {
          id: "5",
          title: "Culture général",
        },
        {
          id: "6",
          title: "Cinéma",
        },
      ],
    };
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
