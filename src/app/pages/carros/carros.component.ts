import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  constructor(public carrosService: CarService) { }

  public carregarCarros(){
    this.carrosService.getCars()
    .subscribe(dados=>{
      this.carrosService.listCars = dados.json();
    },error=>{

    });    
  }

  ngOnInit() {
    this.carregarCarros();
  }

}
