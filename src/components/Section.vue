<template>
  <div>
    <h1 :class="color">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
  },
};
</script>

<style scoped>
</style>