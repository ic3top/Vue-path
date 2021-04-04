<template>
  <div class="movie-info-wrap">
    <div class="movie-info-content">
      <MDBRow>
        <MDBCol sm="4">
          <div class="movie-poster-wrap">
            <div :style="posterStyle" class="movie-poster"></div>
          </div>
        </MDBCol>
        <MDBCol sm="8">
          <h3>{{ movie.Title }}</h3>
          <star-rating
            :increment="0.1"
            :max-rating="10"
            :rating="Number(movie.imdbRating)"
            :read-only="true"
            :star-size="20"
          ></star-rating>
          <p class="movie-description">{{ movie.Plot }}</p>
          <div class="mt-3 mb-4">
            <MDBBadge class="mr-2" color="success">{{ movie.Year }}</MDBBadge>
            <MDBBadge class="mr-2" color="success">{{ movie.Runtime }}</MDBBadge>
            <MDBBadge class="mr-2" color="success">{{ movie.Genre }}</MDBBadge>
            <MDBBadge class="mr-2" color="success">{{ movie.Language }}</MDBBadge>
          </div>
          <MDBTable sm>
            <tbody>
              <tr>
                <th>Production</th>
                <td>{{ movie.Production }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ movie.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ movie.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ movie.Writer }}</td>
              </tr>
              <tr>
                <th>Actors</th>
                <td>{{ movie.Actors }}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{{ movie.Awards }}</td>
              </tr>
            </tbody>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </div>
  </div>
</template>

<script>
import { MDBBadge, MDBCol, MDBRow, MDBTable } from 'mdb-vue-ui-kit';
import StarRating from 'vue-star-rating';

export default {
  name: 'MovieInfoModalContent',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    defaultPosterBg: 'linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)'
  }),
  computed: {
    posterStyle() {
      return {
        'background-image': this.posterBg
      };
    },
    posterBg() {
      return this.movie.Poster ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    }
  },
  components: {
    MDBRow,
    MDBCol,
    MDBTable,
    MDBBadge,
    StarRating
  }
};
</script>

<style scoped>
.movie-info-content {
  padding: 1rem;
  background-color: #fff;
  text-align: left;
}

.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.movie-description {
  font-size: 1.25rem;
  font-weight: 300;
}
>>> .vue-star-rating {
  align-items: flex-end;
}
>>> .vue-star-rating-rating-text {
  line-height: 20px;
}
</style>
