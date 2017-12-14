import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { URL_API } from './api'
import { LoginService } from './login.service';
import { CarService } from './car.service';


@Injectable()
export class CadastroService {

  public dadosCadastro = {
    dataCadastro: new Date()
  };

  constructor(private http: Http, private loginService: LoginService) { }

  postCadastro(): Observable<Response>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.loginService.response.token);
    
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${URL_API}/veiculos/novo`,this.dadosCadastro,options);
  }
  

}
