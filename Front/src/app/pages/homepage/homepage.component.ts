import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  contasPagar:string = "Contas a pagar";
  contasReceber:string = "Contas a receber";
  saldo:string = "Consular saldo";

}
