export class RoomViewModel {
  Name: string;
  GameId: number;
}
export class RoomOut extends RoomViewModel {
  id: number;
  state: number;
}
