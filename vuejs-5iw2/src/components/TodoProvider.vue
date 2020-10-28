<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TodoProvider",
  data: () => ({
    todos: [],
  }),
  methods: {
    addItem: function (data) {
      this.$data.todos.push(data);
    },
  },
  computed: {
    nbCount: function () {
      console.log("compute value");
      return this.$data.todos.length;
    },
  },
  provide: function () {
    return {
      todos: this.$data.todos,
      actions: {
        addItem: this.addItem,
      },
      selectors: {
        nbCount: this.nbCount,
      },
    };
  },
};
</script>