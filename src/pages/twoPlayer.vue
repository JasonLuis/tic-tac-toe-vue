<template>
  <div class="">
    <div class="row items-center justify-between">
      <UiLogoGame />
      <UiCardTurn :turn="getItemPlayer" />
      <UiBtnRefresh />
    </div>
    <div class="row items-center q-mt-lg">
      <UiGameBoard :current-player="getItemPlayer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UiLogoGame from '~~/src/core/components/LogoGame/LogoGame.vue';
import UiCardTurn from '~~/src/core/components/CardTurn/CardTurn.vue';
import UiBtnRefresh from '~~/src/core/components/ButtonRefresh/ButtonRefresh.vue';
import UiGameBoard from '~~/src/core/components/GameBoard/GameBoard.vue';

import { useplayerCurrent } from '~~/src/store/playerCurrent';

const { getItemPlayer } = storeToRefs(useplayerCurrent());
</script>

<style scoped lang="scss"></style>
