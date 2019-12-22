<template>
  <offline @detected-condition="handleConnectivityChange">
    <div slot="online">
      {{ shownQuestion }}
      <v-btn depressed v-on:click="nextQuestion">New questions</v-btn>
    <p>It looks like you're online! Here's all the things you can do...</p>
    ...
    </div>
    <!-- Only renders when the device is offline -->
    <div slot="offline">
      {{ shownQuestion }}
      <v-btn depressed v-on:click="nextQuestion">New questions</v-btn>
      <p>You appear to be offline, that's okay, we can still do things...</p>
      ...
    </div>
  </offline>
</template>

<script lang="ts" src="./GameView.ts"></script>
<style lang="sass" src="./GameView.sass"></style>
