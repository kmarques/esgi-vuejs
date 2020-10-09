<template>
  <div>
    {{ nbCount }}
    <a href="#" @click.ctrl="alertByMethod">By Method</a>
    <a href="#" @click.prevent="alertByComputed">By Computed</a>
    <ul class="board">
      <li v-for="(item, index) in todos" :key="index">
        {{ index }} {{ article }}
        <span
          v-html="$options.filters.allRed($options.filters.ucfirst(item.name))"
        />
        {{ item.completed ? "true" : "false" }}
      </li>
    </ul>
    <input type="text" :value="itemName" @input="setItemName" />
    <input type="number" :value="itemName" @input="setItemName" />
    <input type="checkbox" v-model="completed" />

    <select v-model="category">
      <option v-for="item in categories" :key="item">
        {{ item }}
      </option>
    </select>

    <select v-model="article">
      <option v-for="item in articles" :key="item">
        {{ item }}
      </option>
    </select>

    <button @click="addItem">Add item</button>
    <button @click="empty">Empty</button>
  </div>
</template>

<script>
const options = {
  cuisine: ["cuillères", "fouchettes", "couteaux"],
  salon: ["canapé", "TV"],
};

export default {
  name: "Todos",
  props: {
    msg: String,
    theme: String,
    toggleTheme: Function,
  },
  data: () => ({
    todos: [],
    itemName: "test",
    completed: false,
    category: Object.keys(options)[0],
    article: "",
  }),
  methods: {
    empty: function () {
      this.$data.itemName = "";
      this.$data.completed = false;
    },
    setItemName: function (event) {
      this.$data.itemName = event.target.value;
    },
    addItem: function () {
      this.$data.todos.push({
        name: this.$data.itemName,
        completed: this.$data.completed,
        article: this.$data.article,
      });
      this.empty();
    },
    nbCountMethod: function () {
      console.log("method value");
      return this.$data.todos.length;
    },
    alertByMethod: function () {
      alert(this.nbCountMethod());
    },
    alertByComputed: function () {
      alert(this.nbCount);
    },
  },
  created: () => console.log("created"),
  mounted: () => console.log("mounted"),
  updated: () => console.log("updated"),
  destroyed: () => console.error("destroyed"),
  computed: {
    nbCount: function () {
      console.log("compute value");
      return this.$data.todos.length;
    },
    categories: function () {
      return Object.keys(options);
    },
    articles: function () {
      return options[this.$data.category];
    },
  },
  filters: {
    ucfirst: function ucfirst(str) {
      if (typeof str !== "string" || str.length === 0) return "";
      return str[0].toUpperCase() + str.substring(1);
    },
    toJSON: function (object) {
      return JSON.stringify(object);
    },
    allRed: function (value) {
      return value.replaceAll("r", '<span style="color:red;">r</span>');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
