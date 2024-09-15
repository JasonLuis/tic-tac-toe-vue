<template>
  <div>
    <div class="row items-center justify-between">
      <UiLogoGame />
      <UiCardTurn :turn="getItemPlayer" />
      <UiBtnRefresh @click="callRefreshGame" />
    </div>
    <div class="row items-center q-mt-lg">
      <!-- <UiGameBoardSinglePlayer
        ref="gameBoardRef"
        :difficulty="selectLevel"
        :current-player="getItemPlayer"
        :is-computer="false"
      /> -->
      <h1>{{ selectLevel }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import UiLogoGame from '~~/src/core/components/LogoGame/LogoGame.vue';
import UiCardTurn from '~~/src/core/components/CardTurn/CardTurn.vue';
import UiBtnRefresh from '~~/src/core/components/ButtonRefresh/ButtonRefresh.vue';
import UiGameBoardSinglePlayer from '~/core/components/GameBoard/GameBoardSingleplayer.vue';

import { useplayerCurrent } from '~~/src/store/playerCurrent';
import { NivelEnum } from '~/server/NivelEnum';

const { getItemPlayer } = storeToRefs(useplayerCurrent());

const gameBoardRef = ref<InstanceType<typeof UiGameBoardSinglePlayer> | null>(
  null
);
const selectLevel = ref<NivelEnum>(NivelEnum.Facil);

function callRefreshGame() {
  gameBoardRef.value?.refreshGame();
}
const route = useRoute();
const router = useRouter();

// Ensure the level is set when the component is mounted
// onMounted(() => {
//   // if (route.query.level === undefined) {
//   //   router.push({ name: 'index' });
//   // }
//   selectLevel.value = route.query.level as unknown as NivelEnum;
// });

watch(
  () => route.query.level,
  newLevel => {
    selectLevel.value = newLevel as unknown as NivelEnum;
    console.log('Valor atualizado:', selectLevel.value);
  },
  { immediate: true } // Executa imediatamente, mesmo no carregamento inicial
);

onMounted(async () => {
  await router.isReady(); // Aguarde o router estar completamente pronto
  const query = route.query;
  selectLevel.value = query.level as unknown as NivelEnum;
});
</script>

<style scoped lang="scss"></style>
