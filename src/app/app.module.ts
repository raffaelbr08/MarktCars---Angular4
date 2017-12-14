import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrosComponent } from './pages/carros/carros.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpModule } from '@angular/http';
import { CarComponent } from './components/car/car.component';
import { CarService } from './services/car.service';
import { CadastroService } from './services/cadastro.service';
import { TextMaskModule } from 'angular2-text-mask';

import { KzMaskCurrencyDirective } from './diretivas/diretivas.directive';
import { KzMaskDirective } from './diretivas/dirativa2.directive';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    CarrosComponent,
    LogoComponent,
    MenuComponent,
    CarComponent,
    KzMaskCurrencyDirective,
    KzMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    TextMaskModule
      
  ],
  providers: [LoginService,CarService,CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
