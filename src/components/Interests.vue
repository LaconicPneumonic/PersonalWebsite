<template>
  <v-card elevation="7" class="mx-auto" max-width="344">
    <v-card-title> Interests </v-card-title>

    <v-card-text>
      <v-list dense>
        <v-list-item v-for="interest in interests" :key="interest">{{
          interest
        }}</v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    interests: Array,
  },
};
</script>

<style>
</style>