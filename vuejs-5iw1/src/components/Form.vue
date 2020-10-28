<template>
  <div>
    <input type="text" :value="itemName" @input="setItemName" />
    <input type="checkbox" v-model="completed" />
    <select :value="category" @input="setCategory">
      <option v-for="key in myLovelyKeys" :key="key" :value="key">
        {{ key }}
      </option>
    </select>
    <select v-model="article">
      <option v-for="key in mySecondLovelyKeys" :key="key" :value="key">
        {{ key }}
      </option>
    </select>
    <button @click="addItemM">add item</button>
  </div>
</template>

<script>
const options = {
  cuisine: ["fourchettes", "couteaux"],
  salon: ["tv", "canapé"],
};
export default {
  name: "Form",
  data: () => ({
    itemName: "",
    completed: false,
    category: Object.keys(options)[0],
    article: options[Object.keys(options)[0]][0],
  }),
  inject: ["addItem"],
  methods: {
    setCategory: function (event) {
      this.$data.category = event.target.value;
      this.$data.article = options[event.target.value][0];
    },
    setItemName: function (event) {
      this.$data.itemName = event.target.value;
    },
    addItemM: function () {
      this.addItem({
        id: Date.now(),
        name: this.$data.itemName,
        completed: this.$data.completed,
        article: this.$data.article,
        category: this.$data.category,
      });
      this.$data.itemName = "";
      this.$data.completed = false;
    },
  },
  computed: {
    myLovelyKeys: function () {
      return Object.keys(options);
    },
    mySecondLovelyKeys: function () {
      return options[this.$data.category];
    },
  },
};
</script>