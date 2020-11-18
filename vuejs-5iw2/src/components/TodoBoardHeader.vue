<template>
  <div>
    {{ $route.params.id }}
    {{ params.id }}
    {{ selectors.nbCount }}
    <a href="#" @click.ctrl="alertByMethod">By Method</a>
    <a href="#" @click.prevent="alertByComputed">By Computed</a>
  </div>
</template>

<script>
export default {
  name: "TodoBoardHeader",
  methods: {
    nbCountMethod: function () {
      console.log("method value");
      return this.todos.length;
    },
    alertByMethod: function () {
      alert(this.nbCountMethod());
    },
    alertByComputed: function () {
      alert(this.selectors.nbCount);
    },
  },
  inject: ["selectors"],
};
</script>