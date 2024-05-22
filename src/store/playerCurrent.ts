import { defineStore } from 'pinia';

export const useplayerCurrent = defineStore('player', {
  state: () => ({
    itemPlayer: '',
    playerX: 0,
    playerO: 0
  }),
  actions: {
    setItemPlayer(item: string) {
      this.itemPlayer = item;
    },
    setPlayerX() {
      this.playerX += 1;
    },
    setPlayerO() {
      this.playerO += 1;
    }
  },
  getters: {
    getItemPlayer(): string {
      return this.itemPlayer.toUpperCase();
    },
    getPlayerX(): number {
      return this.playerX;
    },
    getPlayerO(): number {
      return this.playerO;
    }
  }
});
