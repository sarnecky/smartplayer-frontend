export class JoinGame {
  gameId: number;
  roomId: number;


  constructor(gameId: number, roomId: number) {
    this.gameId = gameId;
    this.roomId = roomId;
  }
}
