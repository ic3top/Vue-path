<template>
  <Loader></Loader>
  <PosterBG :poster="posterBG"></PosterBG>
  <Header></Header>
  <Notifications></Notifications>
  <MoviesList :list="moviesList" @changePoster="onChangePoster"></MoviesList>
  <MoviesPagination v-if="!isSearch"
                    :current-page="currentPage"
                    :per-page="moviesPerPage"
                    :total="moviesTotalAmount"
                    @pageChanged="onPageChanged"
  ></MoviesPagination>
  <Footer></Footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './components/TheHeader.vue';
import MoviesList from './components/MoviesList.vue';
import PosterBG from './components/PosterBG.vue';
import MoviesPagination from './components/MoviesPagination.vue';
import Loader from './components/TheLoader.vue';
import Notifications from './components/Notifications.vue';
import Footer from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    MoviesList,
    PosterBG,
    MoviesPagination,
    Loader,
    Notifications,
    Footer
  },
  data() {
    return {
      posterBG: ''
    };
  },
  computed: {
    ...mapGetters('movies', ['moviesList', 'currentPage', 'moviesPerPage', 'moviesTotalAmount', 'isSearch'])
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
