import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';


import { ContratoModule } from './componentes/contrato/contrato.module';
import { LoginModule } from './componentes/login/login.module';
import { MatCardModule } from '@angular/material/card';
import { ComponentComponent } from './componentes/results/component/component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    ContratoModule,
    LoginModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
