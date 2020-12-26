<template>
  <v-card elevation="7" class="mx-auto">
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

<style scoped>
/* Temporary solution detailed here:
 https://github.com/vuetifyjs/vuetify/issues/9130#issuecomment-542534966
 */
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>