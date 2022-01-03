<template>
  <div class="d-flex flex-column align-items-end">
    <div class="minion">
      <div class="minion_text">
        Vous êtes sur la page
        <span class="minion_text_bread">
          {{ title }}
        </span>
      </div>
      <span class="triangle"> </span>
    </div>
    <img
      class="pt-2 minion_img"
      src="../assets/img/personnage.png"
      width="150px"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'Minion',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/custom.scss';

.minion_text {
  border-radius: 12px;
  background: $gradient;
  padding: 1rem;
}
.triangle {
  width: 0;
  height: 0;
  display: inline-block;
  border-width: 0 11px 36px 46px;
  border-color: transparent transparent #cdb4db transparent;
  border-style: solid;
  transform: rotate(154deg) translate(0rem, 1rem);
}
.minion_text_bread {
  font-weight: 800;
  filter: brightness(0.8);
}

.minion_img {
  margin-top: -4rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(-12deg);
  }
}
</style>
