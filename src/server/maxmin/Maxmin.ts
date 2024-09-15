import type { IBoard } from '../IBoard';
import { NivelEnum } from '../NivelEnum';
import { winningCombos } from '../WinningCombos';

const MAX_DEPTH_EASY = 2; // Fácil
const MAX_DEPTH_MEDIUM = 5; // Médio
const MAX_DEPTH_HARD = 9;

export class Maxmin {
  public static evaluate(board: IBoard[]): number {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        board[a].itemSelected &&
        board[a].itemSelected === board[b].itemSelected &&
        board[a].itemSelected === board[c].itemSelected
      ) {
        return board[a].itemSelected === 'X' ? 10 : -10;
      }
    }
    return 0;
  }

  public static isMovesLeft(board: IBoard[]): boolean {
    return board.some(cell => !cell.itemSelected);
  }

  public static minimax(
    board: IBoard[],
    depth: number,
    isMaximizing: boolean,
    maxDepth: number
  ): number {
    if (depth >= maxDepth) {
      return Maxmin.evaluate(board);
    }

    const score = Maxmin.evaluate(board);

    // Se a CPU ou o jogador venceu, retornamos a pontuação
    if (score === 10) return score - depth;
    if (score === -10) return score + depth;

    // Se não houver mais jogadas possíveis, é um empate
    if (Maxmin.isArrayComplete(board)) return 0;

    if (isMaximizing) {
      let best = -Infinity;

      // Verifica todas as posições possíveis
      for (let i = 0; i < board.length; i++) {
        if (!board[i].itemSelected) {
          board[i].itemSelected = 'O';
          best = Math.max(
            best,
            Maxmin.minimax(board, depth + 1, false, maxDepth)
          );
          board[i].itemSelected = undefined; // Undo the move
        }
      }
      return best;
    } else {
      let best = Infinity;

      // Verifica todas as posições possíveis
      for (let i = 0; i < board.length; i++) {
        if (!board[i].itemSelected) {
          board[i].itemSelected = 'X';
          best = Math.min(
            best,
            Maxmin.minimax(board, depth + 1, true, maxDepth)
          );
          board[i].itemSelected = undefined; // Undo the move
        }
      }
      return best;
    }
  }

  public static findBestMove(board: IBoard[], difficulty: NivelEnum): number {
    let bestVal = -Infinity;
    let bestMove = -1;
    const maxDepth =
      difficulty === NivelEnum.Facil
        ? MAX_DEPTH_EASY
        : difficulty === NivelEnum.Medio
          ? MAX_DEPTH_MEDIUM
          : MAX_DEPTH_HARD;

    // Percorre todos os espaços vazios
    for (let i = 0; i < board.length; i++) {
      if (!board[i].itemSelected) {
        // Faz o movimento
        board[i].itemSelected = 'X';

        // Calcula o valor da jogada
        const moveVal = Maxmin.minimax(board, 0, false, maxDepth);

        // Desfaz o movimento
        board[i].itemSelected = undefined;

        // Se o valor da jogada atual é melhor que o melhor valor, atualiza bestMove
        if (moveVal > bestVal) {
          bestMove = i;
          bestVal = moveVal;
        }
      }
    }
    return bestMove;
  }

  public static isArrayComplete(board: IBoard[]): boolean {
    return board.every(cell => cell.itemSelected !== undefined);
  }
}
