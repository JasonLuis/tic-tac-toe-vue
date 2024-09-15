<template>
  <div class="column items-center">
    <UiLogoGame />
    <UiCardSelect class="q-mt-lg" @item-select="playerSelect = $event" />
    <UiBaseButton class="q-mt-lg" @click="newGameCPU()" />
    <UiBaseButton
      class="q-mt-md"
      label="new game (vs player)"
      background="#31C3BD"
      box-shadow="#118C87"
      @click="newGameTwoPlayer"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UiLogoGame from '~~/src/core/components/LogoGame/LogoGame.vue';
import UiCardSelect from '~~/src/core/components/CardSelect/CardSelect.vue';
import UiBaseButton from '~~/src/core/components/BaseButton/BaseButton.vue';

import { useplayerCurrent } from '~~/src/store/playerCurrent';

const { setItemPlayer, setPlayerOne, setPlayerTwo } = useplayerCurrent();
const { getPlayerOne } = storeToRefs(useplayerCurrent());

const playerSelect = ref<string>('X');
const router = useRouter();

const newGameCPU = () => {
  setItemPlayer(playerSelect.value);
  setPlayerOne(playerSelect.value);
  setPlayerTwo(getPlayerOne.value.toUpperCase() === 'X' ? 'O' : 'X');

  router.push({
    name: 'selectLevel'
  });
};

const newGameTwoPlayer = () => {
  setItemPlayer(playerSelect.value);
  setPlayerOne(playerSelect.value);
  setPlayerTwo(getPlayerOne.value.toUpperCase() === 'X' ? 'O' : 'X');

  router.push({
    path: '/twoPlayer'
  });
};
</script>
