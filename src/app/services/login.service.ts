import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { URL_API } from './api'


@Injectable()
export class LoginService {
  public login;

  //RETRUN 200OK LOGIN
  public response = {
    nome: '',
    token: ''
  };  

  constructor(private http: Http) { }

  efetuarLogin(): Observable<Response>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${URL_API}/login`,JSON.stringify(this.login),options);
   
  }

}
