<template>
  <v-container>
    <v-row>
      <v-col> <profile /> </v-col>
    </v-row>

    <v-row v-for="item in items" :key="item.title">
      <v-col>
        <Section :title="item.title">
          <resume-list v-if="item.title === 'Links'" :details="item.content">
            <template v-slot:default="slotProps">
              <v-btn
                :href="slotProps.item"
                target="_blank"
                depressed
                text
                plain
              >
                {{ slotProps.item }}
              </v-btn>
            </template>
          </resume-list>
          <div v-else>{{ item.content }}</div>
        </Section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Section from "@/components/Section.vue";
import Profile from "./Profile.vue";
import ResumeList from "./ResumeList.vue";
export default {
  data: () => ({
    items: [
      {
        title: "About Me",
        content:
          "Adaptable, theory loving engineer, with a passion for business logic. Interested in distributed computation, economics, social justice and disruptive technologies.",
      },
      {
        title: "Location",
        content: "NYC/Metropolitan area and Remote",
      },
      {
        title: "Links",
        content: [
          "https://www.linkedin.com/in/anthony-rolland/",
          "https://www.twitter.com/Anthony52182757",
        ],
      },
      {
        title: "Software Skills",
        content: "VueJS, AWS, Firebase, C#, CPP, Go, Node, SQL, Mongo",
      },
    ],
  }),
  components: {
    Section,
    Profile,
    ResumeList,
  },
};
</script>

<style>
</style>