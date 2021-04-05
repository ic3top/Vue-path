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
      labelledby="movieInfoModal"
      size="xl"
      tabindex="-1"
    >
      <MDBModalHeader>
        <MDBModalTitle id="movieInfoTitle">{{ movieInfo.Title }}</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        <movie-info-modal-content :movie="movieInfo"></movie-info-modal-content>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" @click="movieInfoModal = false">Close</MDBBtn>
      </MDBModalFooter>
    </MDBModal>

    <MDBModal
      id="confirmationWindow"
      v-model="confirmationWindow"
      labelledby="confirmationWindow"
      tabindex="-1"
    >
      <MDBModalHeader>
        <MDBModalTitle id="confirmationMessage">Confirmation window</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        Movie '{{ movieTitleToRemove }}' will be deleted, are you sure?
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" @click="confirmationWindow = false">Close</MDBBtn>
        <MDBBtn color="primary"
                @click="confirmationAlert">
          Delete
          <MDBIcon icon="trash" iconStyle="fas"/>
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </MDBContainer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBRow
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';
import axios from '@/plugins/axios';
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
      movieInfo: '',
      movieTitleToRemove: '',
      movieIdToRemove: ''
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
    MovieInfoModalContent,
    MDBIcon
  },
  setup() {
    const movieInfoModal = ref(false);
    const confirmationWindow = ref(false);
    return {
      movieInfoModal,
      confirmationWindow
    };
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
    ...mapActions(['showNotify', 'toggleLoader']),
    onMouseOver(poster) {
      this.$emit('changePoster', poster);
    },
    onRemoveItem({ id, title }) {
      this.movieIdToRemove = id;
      this.movieTitleToRemove = title;
      this.confirmationWindow = true;
    },
    confirmationAlert() {
      this.confirmationWindow = false;
      this.removeMovie(this.movieIdToRemove);
    },
    async onShowModal(id) {
      this.toggleLoader(true);
      this.movieInfo = await axios.get(`/?i=${id}`);
      this.toggleLoader(false);
      this.movieInfoModal = true;
    }
  }
};
</script>

<style scoped>
.list-title {
  font-size: 40px;
  margin-bottom: 30px;

  letter-spacing:0.1em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
  text-shadow:
    4px 4px #ff1f8f,
    5px 5px #000000;
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
