import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Connection } from "../classes/connection";
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from "../dashboard/DTO/module";
import {SliderModule} from 'primeng/slider';
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

  public configStage: Observable<any> = of({
    width: 200,
    height: 200
  });
  
  public configCircle: Observable<any> = of({
    x: 100,
    y: 100,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });

  public handleClick(component) {
    console.log('Hello Circle', component);
  }

  constructor(private router: Router,
              private http: HttpClient,
              private connection: Connection,
              private route: ActivatedRoute) { }

  ngAfterViewInit(){

  }

  gameId: number;
  minute: number;
  second: number;

  public configImage:EventEmitter<any> = new EventEmitter();

  
  showImage(src: string) {
    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      this.configImage.emit({
        image: image,
      })
    }
  }

  ngOnInit() {   
    this.showImage('assets/images/pitch.jpg');
    this.gameId = this.route.snapshot.params['gameId'];
  }

}
