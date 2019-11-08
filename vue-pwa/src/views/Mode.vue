<template>
  <v-row align="center" class="flex-center-evenly-column mode">
    <router-link to="/" class="my-2">
      <v-btn depressed >Back</v-btn>
    </router-link>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed large>Kids</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large>Teens</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large>Adults</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large>Family</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large>All questions</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./Mode.ts"></script>
<style lang="sass" src="./Mode.sass"></style>
