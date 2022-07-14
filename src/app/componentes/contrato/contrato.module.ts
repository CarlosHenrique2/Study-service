import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoComponent } from './component/contrato.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ContratoComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule
  ],
  exports: [ContratoComponent]
})
export class ContratoModule { }
