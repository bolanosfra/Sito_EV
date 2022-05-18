import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {MostraComponent} from './mostra/mostra.component';
import { Parte1Component } from './parte1/parte1.component';
import { Parte2Component } from './parte2/parte2.component';
import { Parte3Component } from './parte3/parte3.component';

@NgModule({
  declarations: [
    AppComponent,
    MostraComponent,
    Parte1Component,
    Parte2Component,
    Parte3Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
