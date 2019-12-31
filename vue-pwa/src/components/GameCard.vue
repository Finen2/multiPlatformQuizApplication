<template lang="html">
  <offline @detected-condition="handleConnectivityChange">
    <div slot="online">
      {{ shownQuestion }}
      <v-btn depressed v-on:click="nextQuestion">New questions</v-btn>
      <font-awesome-icon icon="user-secret" />
    </div>
    <!-- Only renders when the device is offline -->
    <div slot="offline">
      {{ shownQuestion }}
      <v-btn depressed v-on:click="nextQuestion">New questions</v-btn>
      ..jfksfjdslfjskld.
    </div>
  </offline>
</template>

<script lang="ts" src="./GameCard.ts"></script>
<style lang="sass" src="./GameCard.sass"></style>
