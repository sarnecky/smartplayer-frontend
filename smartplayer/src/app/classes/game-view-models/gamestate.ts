export class GameState {
  activePlayer: string;
  player: string;
  winner: string;
  board: string[];
  playerNewGameReadiness : Map<string, boolean>;
}
