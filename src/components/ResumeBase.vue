<template>
  <v-container>
    <v-row>
      <v-col class="secondary" md="4">
        <div>
          <SideBar />
        </div>
      </v-col>
      <v-col class="primary py-0" md="8">
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