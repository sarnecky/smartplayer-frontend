import {Component} from '@angular/core';
import {RegisterViewModel} from '../classes/account-view-models/register-view-model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Connection} from '../classes/connection';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-addPlayer',
  templateUrl: './addPlayer.component.html',
  styleUrls: [
    './addPlayer.component.css',
  ]
})

export class AddPlayerComponent {

  model = new RegisterViewModel();

  constructor(private auth: AuthService,
              private router: Router) {
  }

  onSubmit() {
    this.router.navigate(['/dashboard/'+sessionStorage.getItem('clubId')]);
  }
}
