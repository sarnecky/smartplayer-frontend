import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Connection } from "../classes/connection";
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from "../dashboard/DTO/module";

declare const h337: any;

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements AfterViewInit, OnInit {

  constructor(private router: Router,
              private http: HttpClient,
              private connection: Connection,
              private route: ActivatedRoute) { }

  ngAfterViewInit(){

  }
  clubId: number;

  ngOnInit() {
    this.clubId = this.route.snapshot.params['clubId'];
  }

  public heatMapClick(event) : void
  {
    this.router.navigate(['/heatmap/' + this.clubId]);
  }

  public positionInTimeClick(event) : void
  {
    this.router.navigate(['/positionInTime/' + this.clubId]);
  }

}
