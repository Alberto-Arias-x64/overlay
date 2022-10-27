import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { ClockV1Component } from './components/clock-v1/clock-v1.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalBarComponent,
    PrincipalComponent,
    ClockV1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
