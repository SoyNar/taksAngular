import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaroRoutingModule } from './saro-routing.module';
import { SaroComponent } from './saro.component';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';


@NgModule({
  declarations: [
    SaroComponent,
    EventsComponent,LoginComponent
  ],
  imports: [
    CommonModule,
    SaroRoutingModule,SharedModule,HttpClientModule
  ]
})
export class SaroModule { }
