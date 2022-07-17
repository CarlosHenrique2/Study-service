import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { documento } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(private http: HttpClient) { }

  getData(data: documento): Observable<documento> {
   return this.http.get<documento>(`http://localhost:3000/documento/${data}`);
  }


}
