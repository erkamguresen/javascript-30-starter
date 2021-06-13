import { initBoard } from '../procedures/board.js';

export function resetGame(event) {
  console.log(event.type);
  initBoard();
}
