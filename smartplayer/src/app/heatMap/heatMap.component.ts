import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Player } from "./DTO/player";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Connection } from "../classes/connection";
import {ActivatedRoute} from '@angular/router';
import { Module } from "../dashboard/DTO/module";

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
  players: Player[] = [];
  heatmap: any;
  gameId: number;


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

  constructor(private http: HttpClient,
              private connection: Connection,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.gameId = this.route.snapshot.params['gameId'];
    this.http
      .get<Player[]>(this.connection.apiURL + '/api/Player/listOfPlayersForGame/'+ this.gameId)
      .subscribe(
        data => {
          this.players = data;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
  }

  onClick(event, player: Player) : void
  {
    console.log(player.id);
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
