import Vue from "vue";
import Vuex from "vuex";
import fetchApi from "../utils/fetchApi";
import { getStoriesInRange } from "../utils/utilities"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stories: [],
    loading: false
  },
  mutations: {
    setStories(state, data) {
      state.stories = data
    },
    setIsLoading(state, data) {
      state.loading = data
    }
  },
  getters: {
    getStories(state) {

      return getStoriesInRange(state.stories)
    }
  },
  actions: {
    fetchStories({ commit }) {
      fetchApi('GET', "/stories", null, commit).then(res => {

        commit("setStories", res.stories)
      })
    }
  },
  modules: {},
});
