<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link to="/todos/new">Todos board</router-link>
      <router-link to="/todos/test">Todos board</router-link>
      <router-link to="/tototest">PAge 404</router-link>
    </div>
    <todo-provider>
      <router-view name="header" />
      <router-view />
      <router-view name="footer" />
    </todo-provider>
  </div>
</template>

<script>
import TodoProvider from "./components/TodoProvider.vue";

export default {
  name: "App",
  components: {
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
