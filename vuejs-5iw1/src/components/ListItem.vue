<template>
  <div>
    <slot name="title"></slot>
    <slot name="tag"></slot>
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  name: "ListItem",
};
</script>