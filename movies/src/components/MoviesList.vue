<template>
  <MDBContainer>
    <h3 class="list-title text-light lh-lg">{{ listTitle }}</h3>
    <MDBRow>
      <template v-if="isExist">
        <MDBCol v-for="(movie, key) in list" :key="key" col="3">
          <MovieListItem :movie="movie"
                         @mouseover="onMouseOver(movie.Poster)"
                         @removeItem="onRemoveItem"
                         @showModal="onShowModal"
          ></MovieListItem>
        </MDBCol>
      </template>
      <template v-else>
        <div>Empty list</div>
      </template>
    </MDBRow>
    <MDBModal
      id="movieInfoModal"
      v-model="movieInfoModal"
      labelledby="exampleModalLabel"
      tabindex="-1"
      size="xl"
    >
      <MDBModalHeader>
        <MDBModalTitle id="exampleModalLabel">{{ selectedMovie.Title }}</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        <movie-info-modal-content :movie="selectedMovie"></movie-info-modal-content>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" @click="movieInfoModal = false">Close</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </MDBContainer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';
import MovieListItem from './MoviesListItem.vue';
import MovieInfoModalContent from './MovieInfoModalContent.vue';

export default {
  name: 'MoviesList',
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['changePoster'],
  data() {
    return {
      movieInfoModal: false,
      selectedMovieId: ''
    };
  },
  components: {
    MDBContainer,
    MDBCol,
    MDBRow,
    MovieListItem,
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MovieInfoModalContent
  },
  setup() {
    const exampleModal = ref(false);

    return {
      exampleModal,
    };
  },
  computed: {
    ...mapGetters('movies', ['isSearch']),
    isExist() {
      return Object.keys(this.list).length;
    },
    listTitle() {
      return this.isSearch ? 'Search results' : 'IMDB Top 250';
    },
    selectedMovie() {
      return this.selectedMovieId ? this.list[this.selectedMovieId] : null;
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
    },
    onShowModal(id) {
      this.selectedMovieId = id;
      this.movieInfoModal = true;
    }
  }
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  color: #fff;
}
</style>
