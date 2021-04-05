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
            v-if="movie.imdbRating && movie.imdbRating !== 'N/A'"
            :increment="0.1"
            :max-rating="10"
            :rating="Number(movie.imdbRating)"
            :read-only="true"
            :star-size="20"
          ></star-rating>
          <div  class="movie-description mt-3">
            <p v-if="plotOfTheMovieExist">
              {{ movie.Plot }}
            </p>
            <p v-else>
              <MDBIcon icon="info-circle" iconStyle="fas" />
              Unfortunately, we could not find the plot of the film.
            </p>
          </div>
          <div class="mt-3 mb-4">
            <MDBBadge class="mr-2" color="success">{{ ReleasedDate }}</MDBBadge>
            <MDBBadge class="mr-2" color="success">{{ movie.Runtime }}</MDBBadge>
            <MDBBadge class="mr-2" color="success">{{ movie.Genre }}</MDBBadge>
            <MDBBadge class="mr-2" color="success">{{ movie.Language }}</MDBBadge>
          </div>
          <MDBTable hover sm>
            <tbody>
            <tr>
              <th scope="row">Production</th>
              <td>{{
                  movie.Production === 'N/A' ?
                    'No results were found.' :
                    movie.Production
                }}
              </td>
            </tr>
            <tr>
              <th scope="row">Country</th>
              <td>{{
                  movie.Country === 'N/A' ?
                    'No results were found.' :
                    movie.Country
                }}
              </td>
            </tr>
            <tr>
              <th scope="row">Director</th>
              <td>{{
                  movie.Director === 'N/A' ?
                    'No results were found.' :
                    movie.Director
                }}
              </td>
            </tr>
            <tr>
              <th scope="row">Writer</th>
              <td>{{
                  movie.Writer === 'N/A' ?
                    'No results were found.' :
                    movie.Writer
                }}
              </td>
            </tr>
            <tr>
              <th scope="row">Actors</th>
              <td>{{
                  movie.Actors === 'N/A' ?
                    'No results were found.' :
                    movie.Actors
                }}
              </td>
            </tr>
            <tr>
              <th scope="row">Awards</th>
              <td>{{
                  movie.Awards === 'N/A' ?
                    'No results were found.' :
                    movie.Awards
                }}
              </td>
            </tr>
            <tr v-if="movie.BoxOffice && movie.BoxOffice !== 'N/A'">
              <th scope="row">Box office</th>
              <td class="text-warning">
                {{ movie.BoxOffice }}
                <MDBIcon icon="money-bill-wave" iconStyle="fas"/>
              </td>
            </tr>
            </tbody>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </div>
  </div>
</template>

<script>
import { MDBBadge, MDBCol, MDBIcon, MDBRow, MDBTable } from 'mdb-vue-ui-kit';
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
    defaultPosterBg: 'https://assets.xtechcommerce.com/uploads/images/medium/d95787754e4f45b95d8f7b79d9835405.jpg'
  }),
  computed: {
    posterStyle() {
      return {
        'background-image': `url(${this.posterBg}`
      };
    },
    posterBg() {
      return this.movie.Poster === 'N/A' ? this.defaultPosterBg : this.movie.Poster;
    },
    plotOfTheMovieExist() {
      return Boolean(this.movie.Plot && this.movie.Plot !== 'N/A');
    },
    ReleasedDate() {
      return this.movie.Released === 'N/A' ? this.movie.Year : this.movie.Released;
    }
  },
  components: {
    MDBRow,
    MDBCol,
    MDBTable,
    MDBBadge,
    StarRating,
    MDBIcon
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

::v-deep(.vue-star-rating) {
  align-items: flex-end;
}

::v-deep(.vue-star-rating-rating-text) {
  line-height: 20px;
}
</style>
