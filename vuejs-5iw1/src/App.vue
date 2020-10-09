<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 @click="toggleTheme">{{ theme }}</h1>
    <!--HelloWorld msg="Welcome to Your Vue.js App" v-bind:theme="theme" :toggleTheme="toggleTheme" /-->
    <a href @click.prevent="toggleIf">"Toggle If</a>
    <a href @click.prevent="toggleShow">"Toggle Show</a>
    <List
      v-if="visible"
      v-show="appear"
      :listStyle="{ backgroundColor: 'red' }"
    />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    List,
  },
  data: () => ({
    theme: "dark",
    visible: true,
    appear: true,
  }),
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
