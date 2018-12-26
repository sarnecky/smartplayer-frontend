export class Point
{
    public _x: number;
    public _y: number;
    public _speed: number;
    constructor(
        private x: number,
        private y: number)
    {
        this._y = y;
        this._x = x;
    }
}