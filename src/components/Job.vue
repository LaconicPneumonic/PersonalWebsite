<template>
  <v-card elevation="7" class="mx-auto" max-width="344">
    <v-card-title> {{ employer }} </v-card-title>

    <v-card-subtitle> {{ location }} </v-card-subtitle>

    <v-card-actions>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ details }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  props: {
    employer: String,
    location: String,
    timeRange: String,
    details: String,
  },
};
</script>

<style>
</style>