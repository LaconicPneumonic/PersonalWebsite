<template>
  <v-list dense color="transparent">
    <v-list-item v-for="(item, i) in details" :key="i">
      <v-list-item-icon>
        <v-icon>mdi-circle-small</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <slot :item="item">
          {{ item }}
        </slot>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    details: Array,
  },
};
</script>

<style>
</style>