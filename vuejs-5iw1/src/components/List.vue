<template>
  <div>
    <h1>List</h1>
    <button @click="alertCountMethod">method</button>
    <Modal :open="modal">
      <template v-slot:title="{ color }">Test {{ color }}</template>
      <Form />
    </Modal>
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
    modal: false,
  }),
  methods: {
    countListMethod() {
      console.error("count method");
      return this.list.length;
    },
    alertCountMethod() {
      alert(this.countListMethod());
    },
    toggleModal() {
      this.modal = !this.modal;
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