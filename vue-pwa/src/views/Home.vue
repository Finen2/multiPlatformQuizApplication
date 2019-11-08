<template>
  <v-row align="center" class="flex-center-evenly-column home">
    <v-col class="text-center" cols="12" sm="4">
      <router-link to="/mode" class="my-2">
        <v-btn depressed>Play</v-btn>
      </router-link>
      <router-link to="/about" class="my-2">
        <v-btn depressed >About</v-btn>
      </router-link>
      <router-link to="/settings" class="my-2">
        <v-btn depressed >Settings</v-btn>
      </router-link>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="sass" src="./Home.sass"></style>
