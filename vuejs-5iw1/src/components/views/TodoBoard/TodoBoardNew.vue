<template>
  <div>
    <Modal :open="modal">
      <template v-slot:title="{ color }">Test {{ color }}</template>
      <Form />
    </Modal>
    <button @click="toggleModal">Add Item</button>
  </div>
</template>

<script>
import Modal from "../../Modal";
import Form from "../../Form";

export default {
  name: "TodoBoardNew",
  components: {
    Modal,
    Form,
  },
  data: () => ({
    modal: false,
  }),
  methods: {
    toggleModal() {
      this.$data.modal = !this.$data.modal;
    },
  },
};
</script>