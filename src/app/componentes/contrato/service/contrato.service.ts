import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contrato } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http: HttpClient) { }

  /* register(): Observable<contrato> {
   return this.http.post<contrato>(`http://localhost:3000/contratos`)
  } */
}
