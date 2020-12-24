<template>
  <v-card elevation="7" class="mx-auto" max-width="344">
    <v-card-title> {{ school }} </v-card-title>

    <v-card-subtitle> {{ degree }} {{ timeRange }} </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    school: String,
    degree: String,
    timeRange: String,
  },
};
</script>

<style>
</style>