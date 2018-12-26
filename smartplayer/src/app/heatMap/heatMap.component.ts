import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Player } from "./DTO/player";

declare const h337: any;

@Component({
  selector: 'app-heatMap',
  templateUrl: './heatMap.component.html',
  styleUrls: ['./heatMap.component.css']
})
export class HeatMapComponent implements AfterViewInit, OnInit {

  width: number = 1056;
  height: number = 708;
  outsideLineXOffset: number = 43;
  outsideLineYOffset: number = 41;
  players: Player[] = [new Player(1,"dupaaaa", "dupaaaaaa")];
  heatmap: any;

  ngAfterViewInit() {
    this.heatmap = h337.create({
      container: window.document.querySelector('#heatmap')
    });


    this.heatmap.setData({
      max: 1,
      data: [
        {x: 500, y: 500, value: 1},
      ]
    });

  }
  
  constructor() { }

  ngOnInit() {
    //pobrac wszystko
  }

  onClick(event, player: Player) : void
  {
    console.log(player._id);
    this.heatmap.setData({
      max: 9,
      data: [
        {x: 500, y: 500, value: 1},
        {x: 500, y: 600, value: 4},
        {x: 600, y: 700, value: 6},

      ]
    });
    //pobierz dane zawodnika
    //update heatmapy
  }

}
