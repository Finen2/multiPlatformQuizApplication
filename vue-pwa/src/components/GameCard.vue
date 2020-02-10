<template lang="html">
  <div class="flex-space__evenly">
    <v-card :color="cardColor" class="questionCard" dark>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-subtitle>{{ shownQuestion }}</v-card-subtitle>
      <v-card-actions>
        <v-btn depressed v-on:click="nextQuestion">Next questions</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" src="./GameCard.ts"></script>
<style lang="sass" src="./GameCard.sass"></style>
