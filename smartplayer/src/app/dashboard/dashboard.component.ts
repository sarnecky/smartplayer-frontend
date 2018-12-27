import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Connection } from "../classes/connection";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Game } from "./DTO/game";
import { Player } from "../heatMap/DTO/player";
import { Team } from "./DTO/team";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient,
    private connection: Connection,
    private route: ActivatedRoute) { }
    games: Game[] =[];
    players: Player[] = [];
    teams: Team[] = [];
    
    clubId: number;
    ngOnInit() {
      this.clubId = this.route.snapshot.params['clubId'];
      this.http
        .get<Game[]>(this.connection.apiURL + '/api/Game/games/'+ this.clubId)
        .subscribe(
          data => {
            this.games = data;
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('An error occurred:', err.error.message);
            } else {
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          });

          this.http
          .get<Player[]>(this.connection.apiURL + '/api/Player/listOfPlayersForClub/'+ this.clubId)
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
            .get<Team[]>(this.connection.apiURL + '/api/Team/listOTeams/'+ this.clubId)
            .subscribe(
              data => {
                this.teams = data;
              },
              (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  console.log('An error occurred:', err.error.message);
                } else {
                  console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                }
              });
    }

}
