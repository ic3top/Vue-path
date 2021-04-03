<template>
    <MDBNavbar bg="dark" container light>
      <MDBContainer class="d-flex justify-content-between align-items-center">
        <MDBNavbarBrand href="#" class="text-light fs-3">Movies-App</MDBNavbarBrand>
        <form class="d-flex input-group w-auto">
          <input
            aria-label="Search"
            class="form-control"
            placeholder="Type query"
            type="search"
            v-model="searchValue"
          />
          <MDBBtn outline="primary" @click="onSearch"> Search </MDBBtn>
        </form>
      </MDBContainer>
    </MDBNavbar>
</template>

<script>
import { MDBBtn, MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-vue-ui-kit';
import { mapActions } from 'vuex';

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
    MDBContainer
  },
  watch: {
    searchValue: 'onEmptyQuery'
  },
  methods: {
    ...mapActions('movies', ['searchMovie', 'fetchMovies', 'toggleSearchStatus']),
    onSearch() {
      this.searchMovie(this.searchValue);
      this.toggleSearchStatus(true);
    },
    onEmptyQuery(query) {
      if (!query) {
        this.fetchMovies();
        this.toggleSearchStatus(false);
      }
    }
  }
};
</script>

<style scoped>

</style>
