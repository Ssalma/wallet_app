import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false,
    userEmail: "",
  },
  getters: {},
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_EMAIL(state, payload) {
      state.userEmail = payload;
    },
  },
  actions: {},
  modules: {},
});
