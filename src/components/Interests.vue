<template>
  <v-card elevation="7" class="mx-auto">
    <v-card-text>
      <resume-list :details="interests" color="secondary">
        <template v-slot="slotProps">
          <strong>{{ slotProps.item }}</strong>
        </template>
      </resume-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ResumeList from "./ResumeList.vue";
export default {
  components: { ResumeList },
  props: {
    interests: Array,
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
