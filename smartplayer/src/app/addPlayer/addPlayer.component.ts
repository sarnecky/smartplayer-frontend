import {Component} from '@angular/core';
import {AddPlayerViewModel} from '../classes/rooms-view-models/add-player-view-model';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-addPlayer',
  templateUrl: './addPlayer.component.html',
  styleUrls: [
    './addPlayer.component.css',
  ]
})

export class AddPlayerComponent {

  model = new AddPlayerViewModel;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  onSubmit() {
    this.auth.addPlayerToDb(this.model, '/api/Player/create');
  }
}
