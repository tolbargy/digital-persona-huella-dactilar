import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LectorHuellaComponent } from './lector-huella/lector-huella.component';

@NgModule({
  declarations: [
    AppComponent,
    LectorHuellaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
