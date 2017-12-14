import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { URL_API } from './api'
import { LoginService } from './login.service';


@Injectable()
export class CarService {
  public listCars = [];
  public idCar;

  public dadosEdit = {
    dataCadastro: new Date()
  };

  
  constructor(private http: Http, private loginService: LoginService) { }

  getCars(): Observable<Response>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.loginService.response.token);
    
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${URL_API}/veiculos`,options)
  }

  getMontadora(): Observable<Response>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.loginService.response.token);

    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${URL_API}/montadoras`,options);  
  }

  putEditCars(): Observable<Response>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.loginService.response.token);
  
      let options = new RequestOptions({ headers: headers });
  
      return this.http.put(`${URL_API}/veiculos/edit`,this.dadosEdit,options); 

  }

  deleteCar(): Observable<Response>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.loginService.response.token);

    let options = new RequestOptions({ headers: headers });

    return this.http.delete(`${URL_API}/veiculos/delete/${this.idCar}`,options); 

  }

}
