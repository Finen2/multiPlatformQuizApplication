<template>
  <div class="flex-default gameNav">
    <router-link to="/mode" class="my-2">
      <font-awesome-icon class="gameNav__icon" icon="arrow-left" />
    </router-link>
    <router-view class="gameNav__window" />
  </div>
</template>

<script lang="ts" src="./GameView.ts"></script>
<style lang="sass" src="./GameView.sass"></style>
