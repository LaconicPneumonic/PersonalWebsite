<template>
  <v-app>
    <v-main>
      <ResumeBase />
    </v-main>
  </v-app>
</template>

<script>
/**
 * ResumeBase
 * - Sidebar
 * - TimelineWrapper
 *
 * Sidebar
 * - Profile
 * - Name
 * - sections Section[]
 * TimelineWrapper
 * - Timeline graphic thing
 * - sections Section[]
 *
 * Timeline
 * - IDK lol
 * Profile
 * - Pic
 * Section
 * - Title
 * - Content: Slot
 * Job
 * - Employer, Location, Time
 * Education
 * - Degree
 * - Institution
 * - Location
 * Interests
 * - List
 */
import ResumeBase from "@/components/ResumeBase.vue";

export default {
  name: "App",

  components: {
    ResumeBase,
  },

  data: () => ({
    //
  }),
};
</script>
