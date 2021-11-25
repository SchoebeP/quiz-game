<template>
  <div>
    <h1>Categories</h1>
    <b-row
      class="justify-content-center align-content-center m-0 categories-list"
    >
    <img src="/src/assets/img/sport.png" alt="">
      <div
        id="v-cats"
        class="col-3 category-item d-flex flex-column justify-content-center p-0"
        v-for="cat in cats"
        :key="cat.id"
      >
        <div>
          <div>
            <img :src="'../assets/img/' + cat.title + '.png'" alt="" />
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
export default {  
  data () {
    return {
      cats: [
        {
          id: '1',
          title: 'Logo'
        },
        {
          id: '2',
          title: 'voitures'
        },
        {
          id: '3',
          title: 'Espace'
        },
        {
          id: '4',
          title: 'Films'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/src/assets/scss/custom.scss';

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
