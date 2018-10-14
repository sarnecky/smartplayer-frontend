export class TicTacToeMove {
  roomId: number;
  field: number;

  constructor(roomId: number, field: number) {
    this.roomId = roomId;
    this.field = field;
  }
}
