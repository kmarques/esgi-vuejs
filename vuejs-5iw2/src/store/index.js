import Vue from "vue";
import Vuex from "vuex";
import CounterModule from "./dummy";

Vue.use(Vuex);

export const SET_LOADING = "setLoading";
export const DELETE_ITEM = "deleteItem";

export default new Vuex.Store({
  state: {
    todos: [],
    loading: false,
  },
  getters: {
    nbTodos: (state) => state.todos.length,
  },
  mutations: {
    [SET_LOADING]: (state, value) => (state.loading = value),
    addItem: (state, item) => state.todos.push(item.payload),
    [DELETE_ITEM]: (state, item) =>
      (state.todos = state.todos.filter((td) => td.id !== item.id)),
  },
  actions: {
    addItem: (context, payload) => {
      return new Promise((res) => {
        context.commit(SET_LOADING, true);
        setTimeout(() => {
          context.commit("addItem", payload);
          context.commit(SET_LOADING, false);
          res(payload);
        }, 5000);
      });
    },
  },
  modules: {
    counterModule: CounterModule,
  },
});
