<template>
  <div>
    <h1>List</h1>
    <button @click="alertCountMethod">method</button>
    {{ countListMethod() }}
    <ul v-bind:style="listStyle">
      <ListItem v-for="item in list" :key="item.id">
        <template v-slot:title>{{ item.name }}</template>
        <template v-slot:tag>{{ item.category }} {{ item.article }}</template>
        <template v-slot:action>
          <button @click="removeItem(item)">Remove Item</button>
        </template>
      </ListItem>
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  name: "List",
  components: {
    ListItem,
  },
  props: {
    listStyle: Object,
  },
  methods: {
    countListMethod() {
      console.error("count method");
      return this.list.length;
    },
    alertCountMethod() {
      alert(this.countListMethod());
    },
  },
  created: () => console.log("created"),
  mounted: () => console.log("mounted"),
  updated: () => console.log("updated"),
  destroyed: () => console.error("destroyed"),
  inject: ["list", "removeItem"],
  filters: {
    ucfirst: function ucfirst(str) {
      if (typeof str !== "string" || str.length === 0) return "";
      return str[0].toUpperCase() + str.substring(1);
    },
    rInRed: (word) => {
      return word.replaceAll("r", '<span style="color: red;">r</span>');
    },
  },
};
</script>