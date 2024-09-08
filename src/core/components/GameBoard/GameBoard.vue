<template>
  <div>
    <div
      v-for="rowIndex in [0, 3, 6]"
      :key="rowIndex"
      class="row justify-between q-mb-md"
    >
      <UiGameItemBoard
        v-for="colIndex in [0, 1, 2]"
        :key="rowIndex + colIndex"
        class=""
        :item-select="getValue(rowIndex + colIndex)"
        :refresh="refreshItems"
        :win="arrayBoard[rowIndex + colIndex]?.win"
        @active="populateArray(rowIndex + colIndex, $event)"
      />
    </div>
    <div class="row">
      <UiCardScore
        class="q-mr-md"
        :player="
          getPlayerOne.toUpperCase() === 'X' ? Select.playerX : Select.playerO
        "
        :score="getScorePlayerOne"
        :text="getTextPlayer1"
      />
      <UiCardScore
        class="q-mr-md"
        :player="Select.ties"
        :score="getScoreTies"
        text="ties"
      />
      <UiCardScore
        :player="
          getPlayerOne.toUpperCase() === 'O' ? Select.playerX : Select.playerO
        "
        :score="getScorePlayerTwo"
        :text="getTextPlayer2"
      />
    </div>
    <UiModalWins
      :modal="openModal"
      :text-win="winnerText"
      :winner="winnerItem"
      @close="openModal = $event"
      @refresh="refreshGame"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import UiGameItemBoard from '../GameItemBoard/GameItemBoard.vue';
import UiModalWins from '../ModalWins/ModalEndGame.vue';
import UiCardScore from '../CardScore/CardScore.vue';
import { useplayerCurrent } from '../../../store/playerCurrent';

enum Select {
  playerX = 'X',
  playerO = 'O',
  ties = 'ties'
}

enum Winner {
  x = 'X',
  o = 'O'
}

const { setItemPlayer, setScorePlayerOne, setScorePlayerTwo, setScoreTies } =
  useplayerCurrent();

const {
  getItemPlayer,
  getPlayerOne,
  getPlayerTwo,
  getScorePlayerOne,
  getScorePlayerTwo,
  getScoreTies
} = storeToRefs(useplayerCurrent());

const openModal = ref(false);
const refreshItems = ref(false);
const winnerText = ref<string | undefined>();
const winnerItem = ref<Winner | undefined>();

const arrayBoard: Array<{
  isActive?: boolean;
  itemSelected: string | undefined;
  win?: boolean;
}> = [];

const props = defineProps<{ currentPlayer: string; isComputer: boolean }>();

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

function isWin() {
  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    const result =
      arrayBoard[a]?.itemSelected &&
      arrayBoard[a].itemSelected === arrayBoard[b]?.itemSelected &&
      arrayBoard[a].itemSelected === arrayBoard[c]?.itemSelected;

    if (result) {
      arrayBoard[a].win = true;
      arrayBoard[b].win = true;
      arrayBoard[c].win = true;
    }
    return result;
  });
}

function populateArray(
  position: number,
  gameBoard: { isActive?: boolean; itemSelected: string | undefined }
) {
  arrayBoard[position] = {
    isActive: gameBoard.isActive,
    itemSelected: gameBoard.itemSelected
  };

  if (!isWin()) {
    if (isArrayComplete()) {
      openModal.value = true;
      setScoreTies();
      winnerItem.value = undefined;
      winnerText.value = '';
    } else {
      setItemPlayer(getItemPlayer.value === 'X' ? 'O' : 'X');
      refreshItems.value = false;
    }
  } else {
    openModal.value = true;
    winnerItem.value = gameBoard.itemSelected as Winner;
    winnerText.value = `PLAYER ${gameBoard.itemSelected} WINS!`;
    gameBoard.itemSelected === getPlayerOne.value
      ? setScorePlayerOne()
      : setScorePlayerTwo();
  }
}

function getValue(position: number) {
  return arrayBoard[position]?.itemSelected || props.currentPlayer;
}

function refreshGame() {
  arrayBoard.length = 0;
  openModal.value = false;
  refreshItems.value = true;
}

function isArrayComplete() {
  const items = arrayBoard.filter(item => item.isActive === true).length === 9;
  return items;
}

const getTextPlayer1 = computed(() => `${getPlayerOne.value} (Player 1)`);
const getTextPlayer2 = computed(() => `${getPlayerTwo.value} (Player 2)`);

// Tornando a função refreshGame acessível via ref
defineExpose({
  refreshGame
});

onMounted(() => {
  if (!getItemPlayer.value) {
    const router = useRouter();
    router.back();
  }
});
</script>
