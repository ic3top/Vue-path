<template>
  <div class="poster-page-bg" :style="posterStyle">
  </div>
</template>

<script>
export default {
  name: 'PosterBG',
  props: {
    poster: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      defaultBackGround: 'linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)'
    };
  },
  computed: {
    backGround() {
      return this.poster ? `url(${this.poster})` : this.defaultBackGround;
    },
    posterStyle() {
      return {
        'background-image': this.backGround
      };
    }
  }
};
</script>

<style scoped>
.poster-page-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all .3s ease;
  z-index: -1;
}

.poster-page-bg::before {
  content: '';
  position: absolute;
  background-image: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
