import { Component, OnInit, AfterViewInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Connection } from "../classes/connection";
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from "../dashboard/DTO/module";
import { SliderModule } from 'primeng/slider';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

// declare window to remove typescript warning
interface Window {
  Image: any;
}
declare const window: Window;

@Component({
  selector: 'app-positionInTime',
  templateUrl: './positionInTime.component.html',
  styleUrls: ['./positionInTime.component.css']
})

export class PositionInTimeComponent implements AfterViewInit, OnInit {

  @ViewChild('pitch') pitchElement: ElementRef;
  private context: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  
  gameId: number;
  minute: number;
  second: number;

  constructor(private router: Router,
              private http: HttpClient,
              private connection: Connection,
              private route: ActivatedRoute) { }

  ngAfterViewInit(){
    this.canvas = this.pitchElement.nativeElement as HTMLCanvasElement
    this.context = this.canvas.getContext('2d');
    this.drawPitch()
  }

  ngOnInit() {   
  }

  public handleMinuteChange(event){
    this.drawPitch()
    this.drawPlayer(200, event.value)
  }

  private drawPlayer(xPosition: number, yPosition: number){
    this.context.beginPath();
    this.context.arc(xPosition, yPosition, 3, 0, 2*Math.PI, false);
    this.context.fillStyle = "#00F";
    this.context.fill();
    this.context.strokeStyle = "#000";
    this.context.stroke();
    this.context.closePath();
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
