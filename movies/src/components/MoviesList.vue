<template>
  <MDBContainer>
    <h3 class="list-title text-light lh-lg">{{ listTitle }}</h3>
    <MDBRow>
      <template v-if="isExist">
        <MDBCol col="3" v-for="(movie, key) in list" :key="key">
          <MovieListItem :movie="movie"
                         @mouseover="onMouseOver(movie.Poster)"
                         @removeItem="onRemoveItem"
          ></MovieListItem>
        </MDBCol>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import { MDBContainer, MDBCol, MDBRow } from 'mdb-vue-ui-kit';
import { mapActions, mapGetters } from 'vuex';
import MovieListItem from './MoviesListItem.vue';

export default {
  name: 'MoviesList',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['changePoster'],
  components: {
    MDBContainer,
    MDBCol,
    MDBRow,
    MovieListItem
  },
  computed: {
    ...mapGetters('movies', ['isSearch']),
    isExist() {
      return Object.keys(this.list).length;
    },
    listTitle() {
      return this.isSearch ? 'Search results' : 'IMDB Top 250';
    }
  },
  methods: {
    ...mapActions('movies', ['removeMovie']),
    ...mapActions(['showNotify']),
    onMouseOver(poster) {
      this.$emit('changePoster', poster);
    },
    onRemoveItem({ id, title }) {
      // TODO: custom confirmation window
      // eslint-disable-next-line no-restricted-globals
      const isConfirmed = confirm(`Do you want to delete ${title}?`);
      if (isConfirmed) {
        this.removeMovie(id);
        this.showNotify({
          msg: 'Movie deleted!',
          type: 'success',
        });
      }
    }
  }
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
