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

const appRoutes: Routes = [
  {
    path:'',
    component: SiteLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/select-game', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService] }
];

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
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    Connection,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
