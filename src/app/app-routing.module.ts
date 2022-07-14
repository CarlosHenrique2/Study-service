import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContratoComponent } from './componentes/contrato/component/contrato.component';
import { DocumentoComponent } from './componentes/documento/documento/documento.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { LoginComponent } from './componentes/login/component/login.component';
import { ResultsComponent } from './componentes/results/results/results.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-contrato', component: ContratoComponent},
  { path: 'home-documento', component: DocumentoComponent},
  { path: 'home-results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
