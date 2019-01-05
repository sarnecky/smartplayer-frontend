import {Component, OnInit} from '@angular/core';
import {AddPlayerViewModel} from '../classes/rooms-view-models/add-player-view-model';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Player} from "../heatMap/DTO/player";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Connection} from "../classes/connection";
import {AddFieldViewModel} from "../classes/rooms-view-models/add-field-view-model";
import {Field} from "../dashboard/DTO/field";

@Component({
  selector: 'app-viewPlayer',
  templateUrl: './viewField.component.html',
  styleUrls: [
    './viewField.component.css',
  ]
})

export class ViewFieldComponent implements OnInit {

  field = new Field();
  fieldId: number;

  constructor(private router: Router,
              private http: HttpClient,
              private connection: Connection,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.fieldId = this.route.snapshot.params['fieldId'];
    this.http
      .get<Field[]>(this.connection.apiURL + '/api/Field/listOfFields/'+ sessionStorage.getItem('clubId'))
      .subscribe(
        data => {
          for(var i of data) {
            if(i.id == this.fieldId) {
              this.field = i;
              return;
            }
          }
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
