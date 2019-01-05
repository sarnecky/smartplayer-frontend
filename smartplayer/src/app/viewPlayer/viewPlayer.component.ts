import {Component, OnInit} from '@angular/core';
import {AddPlayerViewModel} from '../classes/rooms-view-models/add-player-view-model';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Player} from "../heatMap/DTO/player";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Connection} from "../classes/connection";

@Component({
  selector: 'app-viewPlayer',
  templateUrl: './viewPlayer.component.html',
  styleUrls: [
    './viewPlayer.component.css',
  ]
})

export class ViewPlayerComponent implements OnInit {

  player = new Player();

  constructor(private router: Router,
              private http: HttpClient,
              private connection: Connection,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.http
      .get<Player>(this.connection.apiURL + '/api/Player/details/'+ this.route.snapshot.params['playerId'])
      .subscribe(
        data => {
          this.player = data;
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
