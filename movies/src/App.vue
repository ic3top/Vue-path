<template>
  <Loader></Loader>
  <PosterBG :poster="posterBG"></PosterBG>
  <Header></Header>
  <Notifications></Notifications>
  <MoviesList :list="moviesList" @changePoster="onChangePoster"></MoviesList>
  <MoviesPagination :current-page="currentPage"
                    :per-page="moviesPerPage"
                    :total="moviesTotalAmount"
                    @pageChanged="onPageChanged"
  ></MoviesPagination>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './components/Header.vue';
import MoviesList from './components/MoviesList.vue';
import PosterBG from './components/PosterBG.vue';
import MoviesPagination from './components/MoviesPagination.vue';
import Loader from './components/Loader.vue';
import Notifications from './components/Notifications.vue';

export default {
  name: 'App',
  components: {
    Header,
    MoviesList,
    PosterBG,
    MoviesPagination,
    Loader,
    Notifications
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
  min-height: 100vh;
}
</style>
