import { createStore } from 'vuex';

export default createStore({
  state: {
    list: {}
  },
  mutations: {
    addItem(state, item) {
      const newObj = {
        ...item,
        id: String(Math.random()),
      };

      state.list[newObj.id] = newObj;
    },
    deleteItem(state, id) {
      delete state.list[id];
    },
    sortByType(state, typeToShow) {
      for (const [key, { type }] of Object.entries(state.list)) {
        if(type === typeToShow) {
          state.list[key].shown = true;
          continue;
        }
        state.list[key].shown = false;
      }
    },
    showAll(state) {
      for (const key of Object.keys(state.list)) {
        state.list[key].shown = true;
      }
    }
  },
  getters: {
    getList: state => state.list,
  }
});