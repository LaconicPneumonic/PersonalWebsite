<template>
  <v-container>
    <v-timeline dense>
      <!-- <div v-for="section in sections" :key="section.title"> -->
      <v-timeline-item hide-dot="true">
        <v-row>
          <v-col>
            <Section :title="work.title"></Section>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item v-for="job in work.content" :key="job.employer">
        <v-row>
          <v-col>
            <Job v-bind="job" />
          </v-col>
        </v-row>
      </v-timeline-item>
      <!-- </div> -->

      <v-timeline-item hide-dot="true">
        <v-row>
          <v-col>
            <Section title="Education"></Section>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item>
        <v-row>
          <v-col> <Education v-bind="education.content" /> </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item hide-dot="true">
        <v-row>
          <v-col>
            <Section title="Interests"></Section>
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item hide-dot="true">
        <v-row>
          <v-col> <interests v-bind="hobbies.content" /> </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import Section from "@/components/Section.vue";
import Job from "@/components/Job.vue";
import Education from "@/components/Education.vue";
import Interests from "./Interests.vue";

export default {
  data: () => ({
    work: {
      title: "Work",
      content: [
        {
          employer: "Opentrons",
          location: "NYC, NY",
          timeRange: "October 2020 - Present",
          details: ["Developing software to manage covid19 diagnostics"],
        },
        {
          employer: "Bridgewater Associates",
          location: "Norwalk, CT",
          timeRange: "September 2019 - August 2020",
          details: [
            "Created strategies to improve Bridgewater’s algorithmic execution logic for futures and fixed income markets",
            "Contributed asset class agnostic patterns in a distributed, asynchronous system so logic could be easily reused across the entire portfolio and delivered functionality to coordinate buys and sells to obey regulatory requirements",
            "Worked in a distributed processing system to develop scalable, performance critical code while maintaining transparency for user oversight and ex-post analytics",
            "Participated in mature SDLC including continuous validation, quality assurance processes, branch/code management, and incremental go-live verification",
            "Collaborated with product managers and traders to understand business requirements, comply with regulatory implications, and create/implement specs for trading execution logic in various securities",
          ],
        },
        {
          employer: "Google",
          location: "Mountain View, CA",
          timeRange: "June 2017 - August 2017",
          details: [
            "Designed and prototyped 3rd party cloud based OS for Chromebooks",
            "Developed pipeline in Golang to create a verified boot-capable USB flash drive",
            "Created key core utilities for Linux distributions in C and Golang such as init daemons and user level tools",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      content: {
        school: "Massachusetts Institute of Technology",
        degree: "Computer Science",
        timeRange: "2015-2019",
      },
    },
    hobbies: {
      title: "Interests",
      content: {
        interests: ["Biking", "Cooking", "Arduino", "Music"],
      },
    },
  }),
  components: {
    Job,
    Section,
    Education,
    Interests,
  },
};
</script>

<style>
</style>