export default {
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
  actions: {
    incrementIfData: function(context) {
      if (context.rootState.list.length > 0) {
        context.commit("increment");
      }
    },
  },
};
