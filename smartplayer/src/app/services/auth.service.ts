import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Connection} from '../classes/connection';
import {AddFieldViewModel} from "../classes/rooms-view-models/add-field-view-model";

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

          this.router.navigate(['/dashboard/' +  data['clubId']]);
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

  public addPlayerToDb(model, url: String): void {
    this.http
      .post(this.constant.apiURL + url, model)
      .toPromise()
      .then(data => this.addPlayerToTeam('/api/Player/addPlayerToTeam', data['id']));
  }

  public addField(model: AddFieldViewModel, url: String): boolean {
    this.http
      .post(this.constant.apiURL + url,
        {
          'name': model.Name,
          'address': model.Address,
          'private': true,
          'fieldCoordinates': {
            'leftUp': {
              'lat': model.LuLatValue,
              'lng': model.LuLongValue
            },
            'leftDown': {
              'lat': model.LdLatValue,
              'lng': model.LdLongValue
            },
            'rightUp': {
              'lat': model.RuLatValue,
              'lng': model.RuLongValue
            },
            'rightDown': {
              'lat': model.RdLatValue,
              'lng': model.RdLongValue
            }
          },
          'clubId': sessionStorage.getItem('clubId')
        })
      .subscribe(
        data => {
          this.router.navigate(['/dashboard/' + sessionStorage.getItem('clubId')]);
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

  public addPlayerToTeam(url: String, playerId: number): boolean {
    this.http
      .post(this.constant.apiURL + url + '?playerId=' + String(playerId) + '&teamId=' + String(sessionStorage.getItem('teamId')), {})
      .subscribe(
        data => {

          this.router.navigate(['/dashboard/' + sessionStorage.getItem('clubId')]);
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
