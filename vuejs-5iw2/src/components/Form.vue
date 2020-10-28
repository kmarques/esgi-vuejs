<template>
  <div>
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
  name: "Form",
  data: () => ({
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
      this.$emit("add-todo", {
        name: this.$data.itemName,
        completed: this.$data.completed,
        article: this.$data.article,
      });
      this.empty();
    },
  },
  computed: {
    categories: function () {
      return Object.keys(options);
    },
    articles: function () {
      return options[this.$data.category];
    },
  },
};
</script>