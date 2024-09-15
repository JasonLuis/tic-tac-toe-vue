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
        :select-one-player="true"
        :select-one-player-value="arrayBoard[rowIndex + colIndex].itemSelected"
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
import type { IBoard } from '~/server/IBoard';
import { winningCombos } from '~/server/WinningCombos';
import { Maxmin } from '~/server/maxmin/Maxmin';
import { NivelEnum } from '~/server/NivelEnum';

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

const arrayBoard = ref<IBoard[]>(
  Array.from({ length: 9 }, () => ({
    isActive: false,
    itemSelected: undefined,
    win: false
  }))
);

const props = defineProps<{
  currentPlayer: string;
  isComputer: boolean;
  difficulty: NivelEnum;
}>();

function isWin() {
  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    const result =
      arrayBoard.value[a]?.itemSelected &&
      arrayBoard.value[a].itemSelected === arrayBoard.value[b]?.itemSelected &&
      arrayBoard.value[a].itemSelected === arrayBoard.value[c]?.itemSelected;

    if (result) {
      arrayBoard.value[a].win = true;
      arrayBoard.value[b].win = true;
      arrayBoard.value[c].win = true;
    }
    return result;
  });
}

function populateArray(
  position: number,
  gameBoard: { isActive?: boolean; itemSelected: string | undefined }
) {
  arrayBoard.value[position] = {
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
      arrayBoard.value[position] = {
        isActive: gameBoard.isActive,
        itemSelected: gameBoard.itemSelected
      };
      if (props.difficulty === NivelEnum.Facil) {
        fillRandomPosition(getItemPlayer.value === 'O' ? 'X' : 'O');
      } else {
        const bestMove = Maxmin.findBestMove(
          arrayBoard.value,
          props.difficulty
        );
        if (bestMove !== -1) {
          arrayBoard.value[bestMove].isActive = true;
          arrayBoard.value[bestMove].itemSelected =
            getItemPlayer.value === 'O' ? 'X' : 'O';

          if (isWin()) {
            openModal.value = true;
            winnerItem.value = arrayBoard.value[bestMove]
              .itemSelected as Winner;
            winnerText.value = `PLAYER CPU WINS!`;
            setScorePlayerTwo();
          }
        }
      }

      setItemPlayer(getItemPlayer.value);
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
  return arrayBoard.value[position]?.itemSelected || props.currentPlayer;
}

function refreshGame() {
  setItemPlayer(getPlayerOne.value);
  arrayBoard.value = Array.from({ length: 9 }, () => ({
    isActive: false,
    itemSelected: undefined,
    win: false
  }));
  openModal.value = false;
  refreshItems.value = true;
}

function isArrayComplete() {
  const items =
    arrayBoard.value.filter(item => item.isActive === true).length === 9;
  return items;
}

function getRandomEmptyPosition() {
  // Filtra todas as posições vazias
  const emptyPositions = arrayBoard.value
    .map((item, index) => (item.itemSelected === undefined ? index : null))
    .filter(index => index !== null);

  // Se não houver mais posições vazias, retorna -1
  if (emptyPositions.length === 0) {
    return -1;
  }

  // Seleciona uma posição aleatória
  const randomIndex = Math.floor(Math.random() * emptyPositions.length);
  return emptyPositions[randomIndex];
}

function fillRandomPosition(player: string) {
  const position = getRandomEmptyPosition();

  // Verifica se ainda há posições vazias
  if (position !== -1) {
    arrayBoard.value[position as number] = {
      isActive: true,
      itemSelected: player
    };
  }
  if (isWin()) {
    openModal.value = true;
    winnerItem.value = player as Winner;
    winnerText.value = `PLAYER CPU WINS!`;
    setScorePlayerTwo();
  }
}

const getTextPlayer1 = computed(() => `${getPlayerOne.value} (Player 1)`);
const getTextPlayer2 = computed(() => `${getPlayerTwo.value} (CPU)`);

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
