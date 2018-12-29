import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Connection } from "../classes/connection";
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from "../dashboard/DTO/module";
import {SliderModule} from 'primeng/slider';
@Component({
  selector: 'app-positionInTime',
  templateUrl: './positionInTime.component.html',
  styleUrls: ['./positionInTime.component.css']
})

export class PositionInTimeComponent implements AfterViewInit, OnInit {

  constructor(private router: Router,
              private http: HttpClient,
              private connection: Connection,
              private route: ActivatedRoute) { }

  ngAfterViewInit(){

  }
  gameId: number;
  minute: number;
  second: number;

  ngOnInit() {
    this.gameId = this.route.snapshot.params['gameId'];
  }

}
