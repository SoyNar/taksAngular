import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './pages/auth/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
