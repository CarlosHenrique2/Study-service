import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoComponent } from './documento/documento.component';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    DocumentoComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule
  ]
})
export class DocumentoModule { }
