<template>
  <v-card elevation="7" class="mx-auto">
    <v-container class="ma-0 pa-0">
      <v-row no-gutters>
        <v-col cols="auto" class="mr-auto">
          <v-card-title>{{ employer }}</v-card-title>
          <v-card-subtitle> {{ location }} </v-card-subtitle>
        </v-col>
        <v-col cols="auto" align-self="center" class="pa-4">
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <resume-list :details="details" color="secondary"> </resume-list>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import ResumeList from "./ResumeList.vue";
export default {
  data: () => ({
    show: false,
  }),
  props: {
    employer: String,
    location: String,
    timeRange: String,
    details: Array,
  },
  components: {
    ResumeList,
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