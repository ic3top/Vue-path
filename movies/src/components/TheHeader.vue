<template>
  <MDBNavbar bg="dark" container>
    <MDBNavbarBrand class="logo" href="/movies/dist/">Movies-App</MDBNavbarBrand>
    <form class="d-flex input-group w-auto" @submit="onSearch">
      <input
        type="search"
        class="form-control"
        placeholder="Type query"
        aria-label="Search"
        v-model="searchValue"
      />
      <MDBBtn class="text-white" @click="onSearch"> Search </MDBBtn>
    </form>
  </MDBNavbar>
</template>

<script>
import { MDBBtn, MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      searchValue: ''
    };
  },
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarBrand,
  },
  watch: {
    searchValue: 'onEmptyQuery'
  },
  computed: {
    ...mapGetters('movies', ['isSearch'])
  },
  methods: {
    ...mapActions('movies', ['searchMovie', 'fetchMovies', 'toggleSearchStatus']),
    onSearch(event) {
      event.preventDefault();
      this.searchMovie(this.searchValue);
      this.toggleSearchStatus(true);
    },
    onEmptyQuery(query) {
      if (!query && this.isSearch) {
        console.log(this.isSearch);
        this.fetchMovies();
        this.toggleSearchStatus(false);
      }
    }
  }
};
</script>

<style scoped>
.logo {
  font-size: 24px;
  text-shadow: 1px 1px 1px #3F7FBF;
}
</style>
