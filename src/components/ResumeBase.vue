<template>
  <v-container>
    <v-row>
      <v-col>
        <SideBar />
      </v-col>
      <v-col>
        <Timeline />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import Timeline from "@/components/Timeline.vue";
export default {
  components: {
    SideBar,
    Timeline,
  },
};
</script>

<style scoped>
</style>