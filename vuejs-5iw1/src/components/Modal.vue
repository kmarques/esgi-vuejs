<template>
  <div v-if="open" class="modal">
    <h1 class="title"><slot name="title" :color="color">Title</slot></h1>
    <div class="content">
      <slot></slot>
    </div>
    <div class="actions">
      <button>Cancel</button>
      <button>Ok</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    open: Boolean,
  },
  data: () => ({
    color: "red",
  }),
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