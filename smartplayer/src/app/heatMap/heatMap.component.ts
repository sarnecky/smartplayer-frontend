import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Player } from "./DTO/player";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Connection } from "../classes/connection";
import {ActivatedRoute} from '@angular/router';
import { Module } from "../dashboard/DTO/module";
import { TeamPositionsDuringGame } from "./DTO/teamPositionsDuringGame";

declare const h337: any;

@Component({
  selector: 'app-heatMap',
  templateUrl: './heatMap.component.html',
  styleUrls: ['./heatMap.component.css']
})
export class HeatMapComponent implements AfterViewInit, OnInit {

  outsideLineXOffset: number = 43;
  outsideLineYOffset: number = 41;
  width: number = 1056 - 2 * this.outsideLineXOffset;
  height: number = 708 - 2 * this.outsideLineYOffset;
  public players: Player[] = [];
  teamPositionsDuringGame: TeamPositionsDuringGame;
  heatmap: any;
  gameId: number;


  ngAfterViewInit() {
    this.heatmap = h337.create({
      container: window.document.querySelector('#heatmap')
    });
    this.heatmap.setData({
      max: 5,
      data: []
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

        this.http
        .get<TeamPositionsDuringGame>(this.connection.apiURL + '/api/Game/positions/'+ this.gameId + '/' + this.width + '/' + this.height)
        .subscribe(
          data => {
            this.teamPositionsDuringGame = data;
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('An error occurred:', err.error.message);
            } else {
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          });

  }

  public onClick(event, player: Player) : void
  {
      try {
        var positions = this.teamPositionsDuringGame.players.find(i=>i.playerId == player.id);
        var data = [];
        positions.positions.forEach(position => {
          data.push({x: position.x+this.outsideLineXOffset, y: position.y+this.outsideLineYOffset, value: 1})
        });
        console.log(data);
        this.heatmap.setData({
          max: 5,
          data: data
        });
      } catch (error) {
        this.heatmap.setData({
          max: 5,
          data: []
        });
      }

  }

}
