import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { DocumentoModule } from './componentes/documento/documento.module';
import { ContratoModule } from './componentes/contrato/contrato.module';
import { LoginModule } from './componentes/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    DocumentoModule,
    LoginModule,
    ContratoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
