import { Player } from "../player/player";
import { Point } from "../point/point";
import { Ball } from "../ball/ball";
import { Observable } from "rxjs/Observable";

export class Game
{
    private coordinates:Array<Point> = [
       new Point(200, 259),
       new Point(230, 229),
       new Point(290, 289),
       new Point(550, 289),
       new Point(400, 320),
       new Point(200, 259),
    ]
    private player: Player;
    private ball: Ball;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    constructor(
         canvas: HTMLCanvasElement,
         context: CanvasRenderingContext2D)
        {
            this._canvas = canvas;
            this._context = context; 
        }

    public makeStep()
    {
        console.log(this.player);
        this.player.move(this.coordinates[0]);
    }


    public start()
    {
        this.ball = new Ball(this._canvas, this._context);
        this.player = new Player(this._canvas, this._context);
        this.coordinates.forEach(element => {
            window.setInterval(this.player.move(element), 50);
        });
        
    }
}