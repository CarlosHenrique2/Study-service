import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LoginComponent } from './component/login.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
