<template>
  <div>
    <div class="row q-mb-md">
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(0)"
        @active="populateArray(0, $event)"
      />
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(1)"
        @active="populateArray(1, $event)"
      />
      <UiGameItemBoard
        :item-select="getValue(2)"
        @active="populateArray(2, $event)"
      />
    </div>
    <div class="row q-mb-md">
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(3)"
        @active="populateArray(3, $event)"
      />
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(4)"
        @active="populateArray(4, $event)"
      />
      <UiGameItemBoard
        :item-select="getValue(5)"
        @active="populateArray(5, $event)"
      />
    </div>
    <div class="row">
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(6)"
        @active="populateArray(6, $event)"
      />
      <UiGameItemBoard
        class="q-mr-md"
        :item-select="getValue(7)"
        @active="populateArray(7, $event)"
      />
      <UiGameItemBoard
        :item-select="getValue(8)"
        @active="populateArray(8, $event)"
      />
    </div>
    <UiModalWins
      :modal="openModal"
      :text-win="winnerText"
      :winner="winnerItem"
      @close="openModal = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UiGameItemBoard from '../GameItemBoard/GameItemBoard.vue';
import UiModalWins from '../ModalWins/ModalEndGame.vue';

import { useplayerCurrent } from '~~/src/store/playerCurrent';
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

function isArrayComplete() {
  for (let i = 0; i < 9; i++) {
    console.log('position -> ', arrayBoard[i]);
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
