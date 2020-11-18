<template>
  <div>
    <Modal :open="modalOpen">
      <template v-slot:title="{ color }">Add Item {{ color }}</template>
      <Form @add-todo="addItem" />
      <h1>test</h1>
    </Modal>
    <button @click="toggleModal">Open modal</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Form from "./Form";
import Modal from "./Modal";

export default {
  name: "TodosNew",
  components: {
    Form,
    Modal,
  },
  data: () => ({
    modalOpen: false,
  }),
  methods: {
    toggleModal: function () {
      this.$data.modalOpen = !this.$data.modalOpen;
    },
    addItem: function (data) {
      this.$store
        .dispatch("addItem", data)
        .then(() => this.$router.push("/todos/test"));
      //this.$router.push({name: "TodoBoardList", params: {id: "test"}});
      //this.$router.go(-1);
    },
  },
};
</script>