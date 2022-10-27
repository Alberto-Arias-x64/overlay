import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { PrincipalComponent } from './views/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalBarComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
