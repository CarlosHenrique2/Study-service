import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './componentes/consulta/componet/consulta.component';
import { ContratoComponent } from './componentes/contrato/component/contrato.component';
import { LoginComponent } from './componentes/login/component/login.component';


const routes: Routes = [
  { path: 'home-login', component: LoginComponent },
  { path: 'home-consulta', component: ConsultaComponent },
  { path: 'home-contrato', component: ContratoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
