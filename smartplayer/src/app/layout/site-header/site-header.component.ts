import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor(private router: Router) { }
  userName: string;

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
    console.log(this.userName);
  }

  public logOutOnClick(event){
    sessionStorage.clear();
    this.router.navigate(['/welcome']);
  }

}