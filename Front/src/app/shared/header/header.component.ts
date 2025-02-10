import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OperadorService } from '../../Servico/operador.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private servico:OperadorService, private router:Router){}
  logout():void{
    this.servico.logout();
    this.router.navigate(['/login']);
  }
}
