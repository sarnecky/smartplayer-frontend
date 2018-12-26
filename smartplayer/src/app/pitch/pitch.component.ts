import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ball } from "./ball/ball";
import { Game } from "./game/game";
import { Point } from "./point/point";
import { Player } from "./player/player";
import { Observable } from "rxjs";
@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.css']
})
export class PitchComponent implements OnInit {

  @ViewChild('pitch') pitchElement: ElementRef;
  private context: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private ball: Ball;
  private game: Game;
  private x: number = 5
  private y: number = 50;
  private coordinates:Array<Point> = [
    new Point(200, 259),
    new Point(230, 229),
    new Point(290, 289),
    new Point(550, 289),
    new Point(400, 320),
 ]
  constructor() { }

  ngAfterViewInit(){
    this.canvas = this.pitchElement.nativeElement as HTMLCanvasElement
    this.context = this.canvas.getContext('2d');
    this.drawPitch()
    var player = new Player(this.canvas, this.context);
   // this.context.translate(this.x,this.y);
    player.move(new Point(200, 259));
  
  }

  ngOnInit() {
    
  }

  private drawPitch(){
     // Outer lines
     this.context.beginPath();
     this.context.rect(0,0, this.canvas.width, this.canvas.height);
     this.context.fillStyle = "#060";
     this.context.fill();
     this.context.lineWidth = 1;
     this.context.strokeStyle = "#FFF";
     this.context.stroke();
     this.context.closePath();
     
     this.context.fillStyle = "#FFF";
     
     // Mid line
     this.context.beginPath();
     this.context.moveTo(this.canvas.width / 2, 0);
     this.context.lineTo(this.canvas.width / 2, this.canvas.height);
     this.context.stroke();
     this.context.closePath();
     
     //Mid circle
     this.context.beginPath()
     this.context.arc(this.canvas.width / 2, this.canvas.height / 2, 73, 0, 2*Math.PI, false);
     this.context.stroke();
     this.context.closePath();
     //Mid point
     this.context.beginPath()
     this.context.arc(this.canvas.width / 2, this.canvas.height / 2, 2, 0, 2*Math.PI, false);
     this.context.fill();
     this.context.closePath();
     
     //Home penalty box
     this.context.beginPath();
     this.context.rect(0, (this.canvas.height - 322) / 2, 132, 322);
     this.context.stroke();
     this.context.closePath();
     //Home goal box
     this.context.beginPath();
     this.context.rect(0, (this.canvas.height - 146) / 2, 44, 146);
     this.context.stroke();
     this.context.closePath();
     //Home goal 
     this.context.beginPath();
     this.context.moveTo(1, (this.canvas.height / 2) - 22);
     this.context.lineTo(1, (this.canvas.height / 2) + 22);
     this.context.lineWidth = 2;
     this.context.stroke();
     this.context.closePath();
     this.context.lineWidth = 1;

     //Home penalty point
     this.context.beginPath()
     this.context.arc(88, this.canvas.height / 2, 1, 0, 2*Math.PI, true);
     this.context.fill();
     this.context.closePath();
     //Home half circle
     this.context.beginPath()
     this.context.arc(88, this.canvas.height / 2, 73, 0.29*Math.PI, 1.71*Math.PI, true);
     this.context.stroke();
     this.context.closePath();
     
     //Away penalty box
     this.context.beginPath();
     this.context.rect(this.canvas.width-132, (this.canvas.height - 322) / 2, 132, 322);
     this.context.stroke();
     this.context.closePath();
     //Away goal box
     this.context.beginPath();
     this.context.rect(this.canvas.width-44, (this.canvas.height - 146) / 2, 44, 146);
     this.context.stroke();
     this.context.closePath();      
     //Away goal 
     this.context.beginPath();
     this.context.moveTo(this.canvas.width-1, (this.canvas.height / 2) - 22);
     this.context.lineTo(this.canvas.width-1, (this.canvas.height / 2) + 22);
     this.context.lineWidth = 2;
     this.context.stroke();
     this.context.closePath();
     this.context.lineWidth = 1;
     //Away penalty point
     this.context.beginPath()
     this.context.arc(this.canvas.width-88, this.canvas.height / 2, 1, 0, 2*Math.PI, true);
     this.context.fill();
     this.context.closePath();
     //Away half circle
     this.context.beginPath()
     this.context.arc(this.canvas.width-88, this.canvas.height / 2, 73, 0.71*Math.PI, 1.29*Math.PI, false);
     this.context.stroke();
     this.context.closePath();
           
     //Home L corner
     this.context.beginPath()
     this.context.arc(0, 0, 8, 0, 0.5*Math.PI, false);
     this.context.stroke();
     this.context.closePath();
     //Home R corner
     this.context.beginPath()
     this.context.arc(0, this.canvas.height, 8, 0, 2*Math.PI, true);
     this.context.stroke();
     this.context.closePath();
     //Away R corner
     this.context.beginPath()
     this.context.arc(this.canvas.width, 0, 8, 0.5*Math.PI, 1*Math.PI, false);
     this.context.stroke();
     this.context.closePath();
     //Away L corner
     this.context.beginPath()
     this.context.arc(this.canvas.width, this.canvas.height, 8, 1*Math.PI, 1.5*Math.PI, false);
     this.context.stroke();
     this.context.closePath();     
  }

}
