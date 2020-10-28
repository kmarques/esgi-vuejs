<template>
  <div>
    {{ selectors.nbCount }}
    <a href="#" @click.ctrl="alertByMethod">By Method</a>
    <a href="#" @click.prevent="alertByComputed">By Computed</a>
    <ul class="board">
      <li v-for="(item, index) in todos" :key="index">
        {{ index }} {{ article }}
        <span
          v-html="$options.filters.allRed($options.filters.ucfirst(item.name))"
        />
        {{ item.completed ? "true" : "false" }}
      </li>
    </ul>
    <Modal :open="modalOpen">
      <template v-slot:title="{ color }">Add Item {{ color }}</template>
      <Form @add-todo="addItem" />
      <h1>test</h1>
    </Modal>
    <button @click="toggleModal">Open modal</button>
  </div>
</template>

<script>
import Form from "./Form";
import Modal from "./Modal";

export default {
  name: "Todos",
  components: {
    Form,
    Modal,
  },
  props: {
    msg: String,
    theme: String,
    toggleTheme: Function,
  },
  data: () => ({
    modalOpen: false,
  }),
  methods: {
    nbCountMethod: function () {
      console.log("method value");
      return this.todos.length;
    },
    alertByMethod: function () {
      alert(this.nbCountMethod());
    },
    alertByComputed: function () {
      alert(this.selectors.nbCount);
    },

    toggleModal: function () {
      this.$data.modalOpen = !this.$data.modalOpen;
    },
    addItem: function (data) {
      this.actions.addItem(data);
    },
  },
  created: () => console.log("created"),
  mounted: () => console.log("mounted"),
  updated: () => console.log("updated"),
  destroyed: () => console.error("destroyed"),
  inject: ["todos", "actions", "selectors"],
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
