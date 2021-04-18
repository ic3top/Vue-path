<template>
  <div class="movie-item mb-3 hover-shadow">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div  @dblclick="emitInfoEvent"
          class="movie-info-wrap d-flex flex-column justify-content-between"
    >
      <div class="movie-item-info">
        <h3 class="text-light fs-lg-3"> {{ movie.Title }} </h3>
        <span class="text-light">{{ movie.Year }}</span>
      </div>
      <div class="movie-item-controls d-grid gap-2">
        <MDBBtn color="dark" rounded size="md" @click="emitInfoEvent">Info</MDBBtn>
        <MDBBtn color="dark" rounded size="sm" @click="emitRemoveItem">Remove</MDBBtn>
      </div>
    </div>
  </div>
</template>

<script>
import { MDBBtn } from 'mdb-vue-ui-kit';

export default {
  name: 'MovieListItem',
  components: {
    MDBBtn
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  emits: ['showModal', 'removeItem'],
  computed: {
    posterBg() {
      return {
        'background-image': `url(${this.movie.Poster === 'N/A'
          ? 'https://assets.xtechcommerce.com/uploads/images/medium/d95787754e4f45b95d8f7b79d9835405.jpg'
          : this.movie.Poster})`
      };
    }
  },
  methods: {
    emitRemoveItem() {
      this.$emit('removeItem', { id: this.movie.imdbID, title: this.movie.Title });
    },
    emitInfoEvent() {
      this.$emit('showModal', this.movie.imdbID);
    }
  }
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: all .2s ease;
  height: 450px;
  text-align: center;
}
.movie-item:hover {
  transform: scale(1.04);
}
.movie-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.movie-info-wrap {
  padding: 10px;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease;
}
.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5)
}

@media screen and (max-width: 768px) {
  .movie-item {
    height: 80vh;
  }
}
</style>
