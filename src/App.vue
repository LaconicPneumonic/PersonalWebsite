<template>
  <v-app light>
    <v-main class="tertiary">
      <ResumeBase />
    </v-main>
  </v-app>
</template>

<script>
import ResumeBase from "@/components/ResumeBase.vue";

export default {
  name: "App",

  components: {
    ResumeBase,
  },
};
</script>
