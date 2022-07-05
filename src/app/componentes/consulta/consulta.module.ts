import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './componet/consulta.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,MatSliderModule,MatInputModule
  ],
  exports: [ConsultaComponent]
})
export class ConsultaModule { }
