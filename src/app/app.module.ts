import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { ClockV1Component } from './components/clock-v1/clock-v1.component';
import { ProgressCircularComponent } from './components/progress-circular/progress-circular.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalBarComponent,
    PrincipalComponent,
    ClockV1Component,
    ProgressCircularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
