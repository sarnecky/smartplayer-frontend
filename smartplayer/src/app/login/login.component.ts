import {Component} from '@angular/core';
import {LoginViewModel} from '../classes/account-view-models/login-view-model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Connection} from '../classes/connection';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../welcome/welcome.component.css'
  ]
})
export class LoginComponent {

  model = new LoginViewModel();

  constructor(private auth: AuthService) {  }

  onSubmit() {
    this.auth.authentication(this.model, '/api/accounts/login');
  }
}
