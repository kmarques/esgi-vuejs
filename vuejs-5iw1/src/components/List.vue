<template>
  <div>
    <h1>List</h1>
    <button @click="alertCountMethod">method</button>
    {{ countList }}
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
import { mapGetters, mapMutations } from "vuex";

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
    ...mapMutations(["removeItem"]),
  },
  created: () => console.log("created"),
  mounted: () => console.log("mounted"),
  updated: () => console.log("updated"),
  destroyed: () => console.error("destroyed"),
  filters: {
    ucfirst: function ucfirst(str) {
      if (typeof str !== "string" || str.length === 0) return "";
      return str[0].toUpperCase() + str.substring(1);
    },
    rInRed: (word) => {
      return word.replaceAll("r", '<span style="color: red;">r</span>');
    },
  },
  computed: {
    list: function () {
      return this.$store.state.list;
    },
    ...mapGetters(["countList"]),
  },
};
</script>