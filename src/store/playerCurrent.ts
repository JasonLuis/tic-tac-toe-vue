import { defineStore } from 'pinia';

export const useplayerCurrent = defineStore('player', {
  state: () => ({
    itemPlayer: ''
  }),
  actions: {
    setItemPlayer(item: string) {
      this.itemPlayer = item;
    }
  },
  getters: {
    getItemPlayer(): string {
      return this.itemPlayer.toUpperCase();
    }
  }
});
