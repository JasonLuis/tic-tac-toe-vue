<template>
  <div class="row q-mb-md">
    <UiGameItemBoard
      class="q-mr-md"
      :item-select="getValue(0)"
      @active="populateArray(0, $event)"
      @click="teste"
    />
    <UiGameItemBoard
      class="q-mr-md"
      :item-select="getValue(1)"
      @active="populateArray(1, $event)"
      @click="teste"
    />
    <UiGameItemBoard
      :item-select="getValue(2)"
      @active="populateArray(2, $event)"
      @click="teste"
    />
  </div>
  <div class="row q-mb-md">
    <UiGameItemBoard
      class="q-mr-md"
      :item-select="getValue(3)"
      @active="populateArray(3, $event)"
      @click="teste"
    />
    <UiGameItemBoard
      class="q-mr-md"
      :item-select="getValue(4)"
      @active="populateArray(4, $event)"
      @click="teste"
    />
    <UiGameItemBoard
      :item-select="getValue(5)"
      @active="populateArray(5, $event)"
      @click="teste"
    />
  </div>
  <div class="row">
    <UiGameItemBoard
      class="q-mr-md"
      :item-select="getValue(6)"
      @active="populateArray(6, $event)"
      @click="teste"
    />
    <UiGameItemBoard
      class="q-mr-md"
      :item-select="getValue(7)"
      @active="populateArray(7, $event)"
      @click="teste"
    />
    <UiGameItemBoard
      :item-select="getValue(8)"
      @active="populateArray(8, $event)"
      @click="teste"
    />
  </div>
</template>

<script setup lang="ts">
import UiGameItemBoard from '../GameItemBoard/GameItemBoard.vue';

interface GameBoard {
  isActive?: boolean;
  itemSelected: string | undefined;
}

const arrayBoard: Array<GameBoard> = [];
const props = defineProps<{
  currentPlayer: string;
}>();

function teste() {
  console.log('teste -> ', arrayBoard);
}

function populateArray(position: number, gameBoard: GameBoard) {
  arrayBoard[position] = {
    isActive: gameBoard.isActive,
    itemSelected: gameBoard.itemSelected
  };
}

function getValue(position: number) {
  if (arrayBoard[position] === undefined) {
    return props.currentPlayer;
  }

  return arrayBoard[position].itemSelected;
}
</script>

<style scoped lang="scss"></style>
