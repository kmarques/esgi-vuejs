<template>
  <div>
    Nb todos: {{ nbTodos }}
    <ul class="board">
      <li v-for="(item, index) in todos" :key="index">
        {{ index }} {{ article }}
        <span
          v-html="$options.filters.allRed($options.filters.ucfirst(item.name))"
        />
        <button @click="removeItem(item)">remove</button>
        {{ item.completed ? "true" : "false" }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { DELETE_ITEM } from "../store";

export default {
  name: "TodosList",
  created: () => console.log("created"),
  mounted: () => console.log("mounted"),
  updated: () => console.log("updated"),
  destroyed: () => console.error("destroyed"),
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
  method: {
    // const handler = removeItem(item);
    // button.addEventListe("click", handler);
    ...mapMutations([DELETE_ITEM]),
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    removeItem(item) {
      return function () {
        this.$store.commit(DELETE_ITEM, item);
      };
    },
    ...mapGetters(["nbTodos"]),
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
