import IDs from '@/store/mock/imdb_top250';
import axios from '@/plugins/axios';
import mutations from '../mutations';

const { MOVIES, CURRENT_PAGE, REMOVE_MOVIE, TOGGLE_SEARCH, REMOVE_MOVIE_INSEARCH } = mutations;

function serializeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

const moviesStore = {
  namespaced: true,
  state: {
    top250IDs: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
    isSearch: false
  },
  getters: {
    sliceIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    moviesList: ({ movies }) => movies,
    moviesTotalAmount: ({
      top250IDs,
      moviesPerPage
    }) => Math.floor(Object.keys(top250IDs).length / moviesPerPage),
    isSearch: ({ isSearch }) => isSearch,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
    [CURRENT_PAGE](state, page) {
      state.currentPage = page;
    },
    [REMOVE_MOVIE](state, index) {
      state.top250IDs.splice(index, 1);
    },
    [TOGGLE_SEARCH](state, bool) {
      state.isSearch = bool;
    },
    [REMOVE_MOVIE_INSEARCH](state, id) {
      delete state.movies[id];
    }
  },
  actions: {
    async fetchMovies({ commit, getters, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true });
        const { currentPage, moviesPerPage, sliceIDs } = getters;
        const from = (currentPage * moviesPerPage) - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = sliceIDs(from, to);

        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
        const response = await Promise.all(requests);
        const movies = serializeResponse(response);
        commit(MOVIES, movies);
      } catch (err) {
        throw new Error(`Error in fetchMovies: ${err}`);
      } finally {
        dispatch('toggleLoader', false, { root: true });
      }
    },
    changeCurrentPage({ commit, dispatch }, page) {
      commit(CURRENT_PAGE, page);
      dispatch('fetchMovies');
    },
    removeMovie({ commit, dispatch, state }, id) {
      if (state.isSearch) {
        if (state.movies[id]) {
          commit(REMOVE_MOVIE_INSEARCH, id);
          dispatch('showNotify', { msg: 'Movie deleted', type: 'success' }, { root: true });
          return;
        }
        dispatch('showNotify', { msg: 'FATAL: Movie wasn`t found', type: 'error' }, { root: true });
        return;
      }

      const index = state.top250IDs.findIndex((item) => item === id);

      if (index !== -1) {
        commit(REMOVE_MOVIE, index);
        dispatch('fetchMovies');
        dispatch('showNotify', { msg: 'Movie deleted', type: 'success' }, { root: true });
      } else {
        dispatch('showNotify', { msg: 'FATAL: Movie wasn`t found', type: 'error' }, { root: true });
      }
    },
    async searchMovie({ commit, dispatch }, query) {
      try {
        dispatch('toggleLoader', true, { root: true });

        const response = await axios.get(`/?s=${query}`);
        if (response.Error) {
          throw Error(response.Error);
        }

        const movies = serializeResponse(response.Search);
        commit(MOVIES, movies);
      } catch (err) {
        dispatch('toggleSearchStatus', false);
        dispatch('fetchMovies');
        dispatch('showNotify', { msg: err.message, type: 'error' }, { root: true });
      } finally {
        dispatch('toggleLoader', false, { root: true });
      }
    },
    toggleSearchStatus({ commit }, bool) {
      commit('TOGGLE_SEARCH', bool);
    }
  }
};

export default moviesStore;
