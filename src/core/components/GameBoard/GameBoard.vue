<template>
  <div>
    <div class="row q-mb-md">
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(0)"
        :refresh="refreshItems"
        @active="populateArray(0, $event)"
      />
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(1)"
        :refresh="refreshItems"
        @active="populateArray(1, $event)"
      />
      <UiGameItemBoard
        :item-select="getValue(2)"
        :refresh="refreshItems"
        @active="populateArray(2, $event)"
      />
    </div>
    <div class="row q-mb-md">
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(3)"
        :refresh="refreshItems"
        @active="populateArray(3, $event)"
      />
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(4)"
        :refresh="refreshItems"
        @active="populateArray(4, $event)"
      />
      <UiGameItemBoard
        :item-select="getValue(5)"
        :refresh="refreshItems"
        @active="populateArray(5, $event)"
      />
    </div>
    <div class="row">
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(6)"
        :refresh="refreshItems"
        @active="populateArray(6, $event)"
      />
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(7)"
        :refresh="refreshItems"
        @active="populateArray(7, $event)"
      />
      <UiGameItemBoard
        :item-select="getValue(8)"
        :refresh="refreshItems"
        @active="populateArray(8, $event)"
      />
    </div>
    <UiModalWins
      :modal="openModal"
      :text-win="winnerText"
      :winner="winnerItem"
      @close="openModal = $event"
      @refresh="refreshGame()"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UiGameItemBoard from '../GameItemBoard/GameItemBoard.vue';
import UiModalWins from '../ModalWins/ModalEndGame.vue';

import { useplayerCurrent } from '../../../store/playerCurrent';
enum Winner {
  x = 'X',
  o = 'O'
}

const { setItemPlayer } = useplayerCurrent();
const { getItemPlayer } = storeToRefs(useplayerCurrent());

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const openModal = ref<boolean>(false);
const refreshItems = ref<boolean>(false);
const winnerText = ref<string | undefined>();
const winnerItem = ref<Winner | undefined>();

interface GameBoard {
  isActive?: boolean;
  itemSelected: string | undefined;
}

const arrayBoard: Array<GameBoard> = [];
const props = defineProps<{
  currentPlayer: string;
}>();

function isWin() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;

    if (
      arrayBoard[a]?.itemSelected &&
      arrayBoard[a]?.itemSelected === arrayBoard[b]?.itemSelected &&
      arrayBoard[a]?.itemSelected === arrayBoard[c]?.itemSelected
    ) {
      return true;
    }
  }

  return false;
}

function populateArray(position: number, gameBoard: GameBoard) {
  arrayBoard[position] = {
    isActive: gameBoard.isActive,
    itemSelected: gameBoard.itemSelected
  };

  if (!isWin()) {
    if (isArrayComplete()) {
      if (getItemPlayer.value === 'X') {
        setItemPlayer('O');
      } else if (getItemPlayer.value === 'O') {
        setItemPlayer('X');
      }
      refreshItems.value = false;
    } else {
      openModal.value = true;
      winnerItem.value = undefined;
      winnerText.value = '';
    }
  } else {
    openModal.value = true;
    winnerItem.value = gameBoard.itemSelected as Winner;
    winnerText.value = `PLAYER ${gameBoard.itemSelected} WINS!`;
  }
}

function getValue(position: number) {
  if (arrayBoard[position] === undefined) {
    return props.currentPlayer;
  }

  return arrayBoard[position].itemSelected;
}

function refreshGame() {
  arrayBoard.length = 0;
  openModal.value = false;
  refreshItems.value = true;
}

function isArrayComplete() {
  for (let i = 0; i < 9; i++) {
    if (arrayBoard[i]?.itemSelected === undefined) return true;
  }

  return false;
}

onMounted(() => {
  if (getItemPlayer.value === undefined || getItemPlayer.value === '') {
    const router = useRouter();
    router.back();
  }
});
</script>

<style scoped lang="scss"></style>
