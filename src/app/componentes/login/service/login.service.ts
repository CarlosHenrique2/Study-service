import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { urlLogin } from 'src/app/url/url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

 login(json: object): Observable<any> {
   return this.http.get<any>(urlLogin,json)
 }

 login2() {
   return this.http.get(urlLogin).toPromise()
   .then(res => {
     return res;
   })
   .catch(error => {
     return error
   })
 }

}
