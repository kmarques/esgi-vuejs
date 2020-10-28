<template>
  <div v-if="open" class="modal">
    <h1><slot name="title" :color="color">Title</slot></h1>
    <div class="modal-content">
      <slot></slot>
    </div>
    <div class="modal-actions">
      <slot name="actions">
        <button @click="closeModal">Ok</button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    open: Boolean,
  },
  data: function () {
    return {
      color: "red",
    };
  },
  methods: {
    closeModal: function () {
      this.$data.isOpen = false;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
}
</style>