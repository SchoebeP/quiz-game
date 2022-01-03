<template>
  <b-button
    class="cta glow-on-hover"
    size="lg"
    @click="$router.push('categories')"
    >{{ msg }}</b-button
  >
</template>

<script>
export default {
  name: 'PlayButton',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/custom.scss';

.glow-on-hover {
  width: 10rem;
  height: 6rem;
  border: none;
  outline: none;
  color: $white;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  transition: all 0.18s ease-in-out;

  text-transform: uppercase;
  font-weight: 800;
}

.glow-on-hover:before {
  content: '';
  background: $gradient;
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: $gradient;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
