<template>
  <v-row align="center" class="flex-default mode">
    <router-link to="/" class="my-2">
      <font-awesome-icon class="icon" icon="arrow-left" />
    </router-link>
    <v-col class="text-center">
      <router-link to="/kids" class="my-2">
        <v-btn depressed large>Kids</v-btn>
      </router-link>
      <router-link to="/teens" class="my-2">
        <v-btn depressed large>Teens</v-btn>
      </router-link>
      <router-link to="/adults" class="my-2">
        <v-btn depressed large>Adults</v-btn>
      </router-link>
      <router-link to="/family" class="my-2">
        <v-btn depressed large>Family</v-btn>
      </router-link>
      <router-link to="/special" class="my-2">
        <v-btn depressed large>Special</v-btn>
      </router-link>
      <router-link to="/allQuestions" class="my-2">
        <v-btn depressed large>All questions</v-btn>
      </router-link>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./Mode.ts"></script>
<style lang="sass" src="./Mode.sass"></style>
