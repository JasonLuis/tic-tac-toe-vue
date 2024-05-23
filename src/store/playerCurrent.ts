import { defineStore } from 'pinia';

export const useplayerCurrent = defineStore('player', {
  state: () => ({
    itemPlayer: '',
    scorePlayerOne: 0,
    scoreePlayerTwo: 0,
    scoreTies: 0,
    playerOne: '',
    playerTwo: ''
  }),
  actions: {
    setItemPlayer(item: string) {
      this.itemPlayer = item;
    },
    setScorePlayerOne() {
      this.scorePlayerOne += 1;
    },
    setScorePlayerTwo() {
      this.scoreePlayerTwo += 1;
    },
    setScoreTies() {
      this.scoreTies += 1;
    },
    setPlayerOne(player: string) {
      this.playerOne = player;
    },
    setPlayerTwo(player: string) {
      this.playerTwo = player;
    }
  },
  getters: {
    getItemPlayer(): string {
      return this.itemPlayer.toUpperCase();
    },
    getScorePlayerOne(): number {
      return this.scorePlayerOne;
    },
    getScorePlayerTwo(): number {
      return this.scoreePlayerTwo;
    },
    getScoreTies(): number {
      return this.scoreTies;
    },
    getPlayerOne(): string {
      return this.playerOne;
    },
    getPlayerTwo(): string {
      return this.playerTwo;
    }
  }
});
