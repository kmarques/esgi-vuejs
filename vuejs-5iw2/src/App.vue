<template>
  <div id="app">
    <a href="#" @click="toggleShow">Toggle Show</a>
    <a href="#" @click="toggleIf">Toggle If</a>
    <todo-provider>
      <TodoBoard v-if="visible" v-show="appear" />
    </todo-provider>
  </div>
</template>

<script>
import TodoBoard from "./components/TodoBoard.vue";
import TodoProvider from "./components/TodoProvider.vue";

export default {
  name: "App",
  components: {
    TodoBoard,
    TodoProvider,
  },
  data: () => ({ appear: true, visible: true }),
  methods: {
    toggleTheme: function () {
      this.$data.theme = this.$data.theme == "dark" ? "light" : "dark";
    },
    toggleIf: function () {
      this.$data.visible = !this.$data.visible;
    },
    toggleShow: function () {
      this.$data.appear = !this.$data.appear;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
