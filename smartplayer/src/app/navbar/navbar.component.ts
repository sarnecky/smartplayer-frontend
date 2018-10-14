import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userName: string;

  constructor(private router: Router,
              private auth: AuthService) {
    this.userName = this.auth.getUserName();
  }

  signOut() {
    this.auth.signOut();
  }

}
