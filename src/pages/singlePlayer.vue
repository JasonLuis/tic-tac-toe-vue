<template>
  <div class="q-py-lg">
    <div class="row items-center justify-between">
      <UiLogoGame />
      <UiCardTurn :turn="getItemPlayer" />
      <UiBtnRefresh @click="callRefreshGame" />
    </div>
    <div class="row items-center q-mt-lg">
      <UiGameBoardSinglePlayer
        ref="gameBoardRef"
        :difficulty="selectLevel"
        :current-player="getItemPlayer"
        :is-computer="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import UiLogoGame from '../core/components/LogoGame/LogoGame.vue';
import UiCardTurn from '../core/components/CardTurn/CardTurn.vue';
import UiBtnRefresh from '../core/components/ButtonRefresh/ButtonRefresh.vue';
import UiGameBoardSinglePlayer from '../core/components/GameBoard/GameBoardSingleplayer.vue';

import { useplayerCurrent } from '../store/playerCurrent';
import { LevelEnum } from '../server/LevelEnum';

const { getItemPlayer, getLevel } = storeToRefs(useplayerCurrent());

const gameBoardRef = ref<InstanceType<typeof UiGameBoardSinglePlayer> | null>(
  null
);
const selectLevel = ref<LevelEnum>(LevelEnum.Easy);

function callRefreshGame() {
  gameBoardRef.value?.refreshGame();
}

onMounted(() => {
  if (getLevel.value === undefined) {
    const router = useRouter();
    return router.push({
      name: 'index'
    });
  }

  selectLevel.value = getLevel.value;
});
</script>

<style scoped lang="scss"></style>
