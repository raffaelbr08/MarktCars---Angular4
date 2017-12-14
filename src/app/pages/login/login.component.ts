import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public incorret: boolean;

  constructor(public servicoLogin: LoginService, private navega : Router) { }

  ngOnInit() {
     alert("Bloqueie seu pc ao sair da máquina. CTRL+ALT+L.Entedeu?");

  }

  public enviaFormulario(DadosFormulario: NgForm): void{
    this.servicoLogin.login = DadosFormulario.value;    

    this.servicoLogin.efetuarLogin()
    .subscribe(
      dados=>{
        if(dados.status === 200){
          this.servicoLogin.response = dados.json();
          this.navega.navigate(['/home']);
        }else{
          this.incorret = true;
        }

      },error=>{
        this.incorret = true;
      }
    )

  }

}
