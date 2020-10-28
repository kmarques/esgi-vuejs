<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ListProvider",
  data: () => ({
    list: [],
  }),
  methods: {
    addItem(item) {
      this.$data.list.push(item);
    },
    removeItem(_item) {
      this.$data.list = this.$data.list.filter((item) => item.id !== _item.id);
    },
  },
  computed: {
    countList() {
      return this.$data.list.length;
    },
  },
  provide: function () {
    return {
      list: this.$data.list,
      countList: this.countList,
      addItem: this.addItem,
      removeItem: this.removeItem,
    };
  },
};
</script>