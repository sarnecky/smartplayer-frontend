export class Ball
{
    private _x: number;
    private _y: number;
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
        this._context.fillStyle = "#FFF";
        this._context.fill();
        this._context.strokeStyle = "#000";
        this._context.stroke();
        this._context.closePath(); 
    }
}