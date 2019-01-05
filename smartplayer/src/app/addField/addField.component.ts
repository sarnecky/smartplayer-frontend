import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AddFieldViewModel} from '../classes/rooms-view-models/add-field-view-model';

@Component({
  selector: 'app-addField',
  templateUrl: './addField.component.html',
  styleUrls: [
    './addField.component.css',
  ]
})

export class AddFieldComponent {

  model = new AddFieldViewModel;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  onSubmit() {
    this.auth.addField(this.model, '/api/Field/create');
  }
}
