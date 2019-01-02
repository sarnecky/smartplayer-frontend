import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Connection} from "../classes/connection";

@Injectable()
export class AuthService {

  name: string;
  token: string;

  constructor(private router: Router,
              private http: HttpClient,
              private constant: Connection) { }

  authentication(model, url: String) {
    this.http
      .post(this.constant.apiURL + url, model)
      .subscribe(
        data => {
          sessionStorage.setItem('token', data['response'].token);
          this.router.navigate(['/select-game']);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      );
  }

  public login(model, url: String): boolean {
    this.http
      .post(this.constant.apiURL + url, model)
      .subscribe(
        data => {
          sessionStorage.setItem('token', data['accessToken']);
          sessionStorage.setItem('clubId', data['clubId']);
          sessionStorage.setItem('userName', data['userName']);
         
          this.router.navigate(['/dashboard/'+  data['clubId']]);
          return true;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
          
        }
      );
      return false;
  }

  getUserName(): string {
    return sessionStorage.getItem('userName');
  }

  signOut() {
    sessionStorage.clear();
    this.router.navigate(['/welcome']);
  }

}
