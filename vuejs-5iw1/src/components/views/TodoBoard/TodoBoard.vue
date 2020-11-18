<template>
  <div>
    <a href @click.prevent="toggleIf">"Toggle If</a>
    <a href @click.prevent="toggleShow">"Toggle Show</a>
    <List
      v-if="visible"
      v-show="appear"
      :listStyle="{ backgroundColor: 'red' }"
    />
  </div>
</template>

<script>
import List from "../../List";

export default {
  name: "TodoBoard",
  components: {
    List,
  },
  data: () => ({
    visible: true,
    appear: true,
  }),
  methods: {
    toggleIf() {
      this.$data.visible = !this.$data.visible;
    },
    toggleShow() {
      this.$data.appear = !this.$data.appear;
    },
  },
};
</script>