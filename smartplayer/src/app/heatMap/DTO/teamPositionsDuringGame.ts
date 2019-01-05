import DateTimeOffset from 'datetime-offset';
export class TeamPositionsDuringGame
{
    public players: PlayerWithPositions[];
}

export class PlayerWithPositions
{
    public playerName: string;
    public playerId: number;
    public positions: Position[];
}

export class Position
{
    public x: number;
    public y: number;
    public date: Date;
}