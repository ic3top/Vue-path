<template>
  <Loader></Loader>
  <PosterBG :poster="posterBG"></PosterBG>
  <MoviesList :list="moviesList" @changePoster="onChangePoster"></MoviesList>
  <MoviesPagination :current-page="currentPage"
                    :per-page="moviesPerPage"
                    :total="moviesTotalAmount"
                    @pageChanged="onPageChanged"
  ></MoviesPagination>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from './components/MoviesList.vue';
import PosterBG from './components/PosterBG.vue';
import MoviesPagination from './components/MoviesPagination.vue';
import Loader from './components/Loader.vue';

export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBG,
    MoviesPagination,
    Loader
  },
  data() {
    return {
      posterBG: ''
    };
  },
  computed: {
    ...mapGetters('movies', ['moviesList', 'currentPage', 'moviesPerPage', 'moviesTotalAmount'])
  },
  watch: {
    '$route.query': {
      handler: 'onPageQueryChange',
      deep: true
    }
  },
  methods: {
    ...mapActions('movies', ['fetchMovies', 'changeCurrentPage']),
    onChangePoster(poster) {
      this.posterBG = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    },
    onPageQueryChange({ page = 1 } = {}) {
      this.changeCurrentPage(Number(page));
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: center;
}
</style>
