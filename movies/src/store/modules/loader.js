import mutations from '../mutations';

const { TOGGLE_LOADER } = mutations;

const loaderStore = {
  state: {
    isShowLoader: false
  },
  mutations: {
    [TOGGLE_LOADER](state, bool) {
      state.isShowLoader = bool;
    }
  },
  getters: {
    isShowLoader: ({ isShowLoader }) => isShowLoader
  },
  actions: {
    toggleLoader({ commit }, bool) {
      commit(TOGGLE_LOADER, bool);
    }
  }
};

export default loaderStore;
