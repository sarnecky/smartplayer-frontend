import { Point } from "../point/point";

export class Player
{
    private _x: number;
    private _y: number;
    private _speed:number;
    private _team: string;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    constructor(
        private canvas: HTMLCanvasElement,
        private context: CanvasRenderingContext2D){
        this._x = canvas.width/3;
        this._y = canvas.height/3;
        this._canvas = canvas;
        this._context = context;
    }

    public draw(){
        this._context.beginPath();
        this._context.arc(this._x, this._y, 3, 0, 2*Math.PI, false);
        this._context.fillStyle = "#00F";
        this._context.fill();
        this._context.strokeStyle = "#000";
        this._context.stroke();
        this._context.closePath(); 
    }

    public move(point: Point){
        this._x = point._x;
        this._y = point._y;   
        this.draw();
    }
}