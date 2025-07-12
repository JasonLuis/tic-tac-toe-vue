<template>
  <div class="q-py-lg">
    <div class="row items-center justify-between">
      <UiLogoGame />
      <UiCardTurn :turn="getItemPlayer" />
      <UiBtnRefresh @click="callRefreshGame" />
    </div>
    <div class="row items-center q-mt-lg">
      <UiGameBoardMultiplayer
        ref="gameBoardRef"
        :current-player="getItemPlayer"
        :is-computer="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UiLogoGame from '~~/src/core/components/LogoGame/LogoGame.vue';
import UiCardTurn from '~~/src/core/components/CardTurn/CardTurn.vue';
import UiBtnRefresh from '~~/src/core/components/ButtonRefresh/ButtonRefresh.vue';
import UiGameBoardMultiplayer from '~/core/components/GameBoard/GameBoardMultiplayer.vue';

import { useplayerCurrent } from '~~/src/store/playerCurrent';

const { getItemPlayer } = storeToRefs(useplayerCurrent());

const gameBoardRef = ref<InstanceType<typeof UiGameBoardMultiplayer> | null>(
  null
);

function callRefreshGame() {
  gameBoardRef.value?.refreshGame();
}
</script>

<style scoped lang="scss"></style>
