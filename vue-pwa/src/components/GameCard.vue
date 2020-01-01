<template lang="html">
  <div class="">
    {{ shownQuestion }}
    <v-btn depressed v-on:click="nextQuestion">New questions</v-btn>
    <font-awesome-icon icon="user-secret" />
  </div>
</template>

<script lang="ts" src="./GameCard.ts"></script>
<style lang="sass" src="./GameCard.sass"></style>
