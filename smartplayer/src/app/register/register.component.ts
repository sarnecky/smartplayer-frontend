import {Component} from '@angular/core';
import {RegisterViewModel} from '../classes/account-view-models/register-view-model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Connection} from '../classes/connection';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
    '../welcome/welcome.component.css'
  ]
})

export class RegisterComponent {

  model = new RegisterViewModel();

  constructor(private auth: AuthService) {
  }

  onSubmit() {
    this.auth.authentication(this.model, '/api/Accounts/register');
  }
}
