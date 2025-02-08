import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, RouterModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  contasPagar:string = "Contas a pagar";
  contasReceber:string = "Contas a receber";
  saldo:string = "Consular saldo";

  showWelcome: boolean = true;

  changeWelcome(){
    if(this.showWelcome == true){
      this.showWelcome = false;
    }else{
      this.showWelcome = true;
    }
  }
}
