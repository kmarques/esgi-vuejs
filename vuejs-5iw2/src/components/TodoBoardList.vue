<template>
  <div>
    <ul class="board">
      <li v-for="(item, index) in todos" :key="index">
        {{ index }} {{ article }}
        <span
          v-html="$options.filters.allRed($options.filters.ucfirst(item.name))"
        />
        {{ item.completed ? "true" : "false" }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodosList",
  created: () => console.log("created"),
  mounted: () => console.log("mounted"),
  updated: () => console.log("updated"),
  destroyed: () => console.error("destroyed"),
  inject: ["todos"],
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
