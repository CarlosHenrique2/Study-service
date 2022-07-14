import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContratoComponent } from './componentes/contrato/component/contrato.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { LoginComponent } from './componentes/login/component/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-contrato', component: ContratoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
