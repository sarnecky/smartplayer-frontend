import {HttpHeaders} from '@angular/common/http';
import {AuthService} from '../services/auth.service';

export class Connection {
  apiURL = 'http://localhost:18930';
  // apiURL = 'http://localhost:5000';
  /*httpOptions = {
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem('token')),
  };*/
}
