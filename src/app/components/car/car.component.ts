import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CarService } from '../../services/car.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  montadora: any;
  @ViewChild('formularioEdit') public formularioedit: NgForm
  listMontadoras = [];

  public loadCars(){
    this.carService.getCars()
    .subscribe(dados=>{
      this.carService.listCars = dados.json();
    },error=>{}); 
  }

  @Input() car: any;

  constructor(public carService: CarService) { }

  ngOnInit() {   
      this.carService.listCars.forEach(car => {
        car.indice = false;
      });
  }

  deleteCar(car){
    this.carService.idCar = car.id;
    this.carService.deleteCar()
    .subscribe(
      dados=>{
        
        alert("Veiculo foi deletado com sucesso.");
        this.loadCars();
      },error=>{
        alert(error._body)
      }
    )    
  }

  //Editar car
  editCar(car){
    console.log(car);
    this.montadora = {nome: car.montadora.nome};
    car.indice = true;
    this.carService.getMontadora()
    .subscribe(
      dados=>{
        this.listMontadoras = dados.json();
      },error=>{
      }
    )
  }

  salvarEdicao(formulario: NgForm, carAtual){
     //tratando montadoras para enviar
    this.listMontadoras.forEach(montadora => {
      if(formulario.value.montadora == montadora.nome ){
        formulario.value.montadora = montadora;
      }
    });

    //adcionando dataCadastro & ID atual ao objeto para enviar
    formulario.value.dataCadastro = new Date(); 
    formulario.value.id = carAtual.id;

    //passando dados do formulario para variavel no Service
    this.carService.dadosEdit = formulario.value;  

    this.carService.putEditCars()
    .subscribe(
      dados=>{
        alert("Veiculo editado com sucesso");
        carAtual.indice = false;
        this.loadCars();
               
      },error=>{
        alert(error._body);
      }
    )
  }

  //Cancela edicao
  cancelarEdicao(car){
    car.indice = false;
  }

}
