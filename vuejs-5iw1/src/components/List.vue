<template>
  <div>
    <h1>List</h1>
    <button @click="alertCountComputed">computed</button>
    <button @click="alertCountMethod">method</button>
    <Modal :open="modal">
      <template v-slot:title="{ color }">Test {{ color }}</template>
      <Form @add-item="addItem" />
    </Modal>
    {{ countList }} {{ countListMethod() }}
    <ul v-bind:style="listStyle">
      <ListItem v-for="item in list" :key="item.id">
        <template v-slot:title>{{ item.name }}</template>
        <template v-slot:tag>{{ item.category }} {{ item.article }}</template>
        <template v-slot:action>
          <button @click="removeItem(item)">Remove Item</button>
        </template>
      </ListItem>
    </ul>
    <button @click="toggleModal">Add Item</button>
  </div>
</template>

<script>
import Form from "./Form";
import Modal from "./Modal";
import ListItem from "./ListItem";

export default {
  name: "List",
  components: {
    Form,
    ListItem,
    Modal,
  },
  props: {
    listStyle: Object,
  },
  data: () => ({
    list: [{ id: 1, name: "Kakarl" }],
    modal: false,
  }),
  methods: {
    addItem: function (item) {
      this.$data.list.push(item);
    },
    countListMethod: function () {
      console.error("count method");
      return this.$data.list.length;
    },
    alertCountComputed: function () {
      alert(this.countList);
    },
    alertCountMethod: function () {
      alert(this.countListMethod());
    },
    toggleModal: function () {
      this.modal = !this.modal;
    },
    removeItem: function (_item) {
      this.$data.list = this.$data.list.filter((item) => item.id !== _item.id);
    },
  },
  created: () => console.log("created"),
  mounted: () => console.log("mounted"),
  updated: () => console.log("updated"),
  destroyed: () => console.error("destroyed"),
  computed: {
    countList: function () {
      console.error("count computed");
      return this.$data.list.length;
    },
  },
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