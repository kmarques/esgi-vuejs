import Vue from "vue";
import Vuex from "vuex";
import { addItem, fetchItem } from "./backend/list-localstorage";
import counterModule from "./counter";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  getters: {
    countList(state) {
      return state.list.length;
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    addItem(state, payload) {
      state.list.push(payload);
    },
    setItems(state, payload) {
      state.list = payload;
    },
    removeItem(state, payload) {
      state.list = state.list.filter((item) => item.id !== payload.id);
    },
  },
  actions: {
    fetchItems: function(context) {
      return new Promise((res) => {
        context.commit("setLoading", true);
        fetchItem().then((items) => {
          context.commit("setItems", items);
          context.commit("setLoading", false);
          res(items);
        });
      });
    },
    addItem: function(context, payload) {
      return new Promise((res) => {
        context.commit("setLoading", true);
        addItem(payload).then((item) => {
          context.commit("addItem", item);
          context.commit("setLoading", false);
          res(item);
        });
      });
    },
  },
  modules: {
    counterModule,
  },
});
