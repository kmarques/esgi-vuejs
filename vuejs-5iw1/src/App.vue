<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 @click="toggleTheme">{{ theme }}</h1>
    <!--HelloWorld msg="Welcome to Your Vue.js App" v-bind:theme="theme" :toggleTheme="toggleTheme" /-->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/todos">Todo board</router-link>
    </nav>
    <header>
      <router-view name="header" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <router-view name="footer" />
    </footer>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import notificationCenter from "./lib/NotifCenter";

export default {
  name: "App",
  data: () => ({
    theme: "dark",
    msg: "",
  }),
  methods: {
    toggleTheme() {
      this.$data.theme = this.$data.theme == "dark" ? "light" : "dark";
    },
  },
  created() {
    notificationCenter.onMessage((msg) => {
      this.$data.msg = msg.msg;
      setTimeout(() => (this.$data.msg = ""), 5000);
    });
    this.$store.dispatch("fetchItems");
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
