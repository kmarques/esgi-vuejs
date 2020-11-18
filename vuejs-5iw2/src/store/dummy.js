export default {
  state: {
    counter: 0,
  },
  mutations: {
    increment: (state) => state.counter++,
    decrement: (state) => state.counter--,
    reset: (state) => (state.counter = 0),
  },
  actions: {
    incrementIfTodos: ({ rootState, commit }) => {
      if (rootState.todos.length) {
        commit("increment");
      }
    },
  },
};
