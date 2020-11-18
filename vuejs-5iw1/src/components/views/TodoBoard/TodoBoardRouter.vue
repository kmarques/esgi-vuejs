<template>
  <div>
    <router-link :to="{ name: 'TodoNew', params: { test: 1 } }"
      >New Todo</router-link
    >
    <router-link to="/todos/test">Board test</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "TodoBoardRouter",
};
</script>