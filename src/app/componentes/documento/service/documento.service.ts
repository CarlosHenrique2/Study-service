import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  constructor(private http: HttpClient) { }

  getData() {
   console.log(JSON.stringify(this.http.get("http://localhost:5000/documentos")));
  }

  

}
