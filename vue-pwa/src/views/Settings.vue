<template>
  <v-row align="center" class="flex-center-evenly-column mode">
    <router-link to="/" class="my-2">
      <v-btn depressed >Back</v-btn>
    </router-link>
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn depressed large>Get Q:s</v-btn>
        <Login />
      </div>
      <div class="my-2">
        <v-btn depressed large>Write Q:s</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large>Choose Q:s</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./Settings.ts"></script>
<style lang="sass" src="./Settings.sass"></style>
