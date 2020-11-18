<template>
  <div>
    <router-link :to="{ name: 'TodoNew', params: { test: 1 } }"
      >New Todo</router-link
    >
    <router-link to="/todos/test">Board test</router-link>
    <ListProvider>
      <router-view />
    </ListProvider>
  </div>
</template>

<script>
import ListProvider from "../../ListProvider";
export default {
  name: "TodoBoardRouter",
  components: {
    ListProvider,
  },
};
</script>