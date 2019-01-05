import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { Connection } from './classes/connection';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {KeysPipe} from "./classes/map-to-iterable";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SiteLayoutComponent } from "./layout/site-layout/site-layout.component";
import { SiteHeaderComponent } from "./layout/site-header/site-header.component";
import { PlayerComponent } from "./player/player.component";
import { PitchComponent } from "./pitch/pitch.component";
import { GameComponent } from "./gameStatistics/game.component";
import { PositionMapComponent } from "./gameStatistics/positionMap/positionMap.component";
import { HeatMapComponent } from "./heatMap/heatMap.component";
import { CheckerComponent } from "./gamePresentationChecker/checker.component";
import { PositionInTimeComponent } from "./positionInTime/positionInTime.component";
import { SliderModule } from 'primeng/slider';
import { AddPlayerComponent } from "./addPlayer/addPlayer.component";
import { AddFieldComponent } from "./addField/addField.component";
///import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from "@angular/http";
import {ViewPlayerComponent} from "./viewPlayer/viewPlayer.component";
import {ViewFieldComponent} from "./viewField/viewField.component";
const appRoutes: Routes = [
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'dashboard/:clubId', component: DashboardComponent }
    ]
  },
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'game/:gameId', component: GameComponent }
    ]
  },
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'heatmap/:gameId', component: HeatMapComponent }
    ]
  },
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'checker/:gameId', component: CheckerComponent }
    ]
  },
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'positionInTime/:gameId', component: PositionInTimeComponent }
    ]
  },
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'addPlayer', component: AddPlayerComponent }
    ]
  },
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'addField', component: AddFieldComponent }
    ]
  },
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'viewPlayer/:playerId', component: ViewPlayerComponent }
    ]
  },
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'viewField/:fieldId', component: ViewFieldComponent }
    ]
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService] },
  
]
@NgModule({
  declarations: [
    KeysPipe,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    WelcomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    GameComponent,
    PlayerComponent,
    PitchComponent,
    PositionMapComponent,
    HeatMapComponent,
    CheckerComponent,
    PositionInTimeComponent,
    AddPlayerComponent,
    AddFieldComponent,
    ViewPlayerComponent,
    ViewFieldComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    SliderModule,
    HttpModule
  ],
  providers: [
    Connection,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
