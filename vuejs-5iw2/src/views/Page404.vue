<template>
  <div class="about">
    <h1>Oups 404</h1>
    {{ $route.params.pathMatch }}
    {{ msg }}
    {{ restUrl }}
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>