<template>
  <div class="">
    <div class="row items-center">
      <UiLogoGame class="" />
      <UiCardTurn class="q-ml-xl" />
      <UiBtnRefresh />
    </div>
    <div class="row items-center q-mt-lg">
      <UiGameBoard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import UiLogoGame from '~~/src/core/components/LogoGame/LogoGame.vue';
import UiCardTurn from '~~/src/core/components/CardTurn/CardTurn.vue';
import UiBtnRefresh from '~~/src/core/components/ButtonRefresh/ButtonRefresh.vue';
import UiGameBoard from '~~/src/core/components/GameBoard/GameBoard.vue';

const route = useRoute();

const param = computed(() => {
  return route.params.selectedPlayer;
});
</script>

<style scoped lang="scss"></style>
