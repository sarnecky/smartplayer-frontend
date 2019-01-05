import {HttpHeaders} from '@angular/common/http';
import {AuthService} from '../services/auth.service';

export class Connection {
  apiURL = 'https://smartplayerauthorizationwebapi20190102105923.azurewebsites.net';
  // apiURL = 'http://localhost:5000';
  /*httpOptions = {
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem('token')),
  };*/
}
