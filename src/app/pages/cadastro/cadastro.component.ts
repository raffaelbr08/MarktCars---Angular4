import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public response;
  public montadora = [];
  public ultimoId;
  public dataAtual = new Date();
  

  constructor(private cadastroService: CadastroService, private carService: CarService) { }

  ngOnInit() {
    //Get montadoras para abastecer o select
    this.carService.getMontadora()
    .subscribe(
      dados=>{
        this.response = dados.json();
        this.montadora = this.response;
      },error=>{
      }
    )

    //getVeiculos para pegar o id e incrementar
    this.carService.getCars().
    subscribe(
      dados=>{
        let indice = dados.json().length - 1;
        this.ultimoId = dados.json()[indice].id;
      },error=>{

      }
    )
  }

  //Submit formulario
  cadastrarVeiculo(formulario: NgForm): void{
    //tratando montadoras para enviar
    this.montadora.forEach(montadora => {
      if(formulario.value.montadora == montadora.id ){
        formulario.value.montadora = montadora;
      }
    });

    //adcionando dataCadastro ao objeto para enviar
    formulario.value.dataCadastro = new Date(); 

    //adcionando Id ao objeto para enviar
    this.ultimoId += 1;
    formulario.value.id = this.ultimoId;

    //passando dados do formulario para variavel no Service
    this.cadastroService.dadosCadastro = formulario.value;   

    //chamada do ServicePost
    this.cadastroService.postCadastro()
    .subscribe(
      dados=>{
        alert("Parabéns, o veiculo foi cadastrado")
      },error=>{

      }
    )
  }

}
