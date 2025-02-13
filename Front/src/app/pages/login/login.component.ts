import { CommonModule, NgLocalization } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OperadorService } from '../../Servico/operador.service';
import { HttpClient } from '@angular/common/http';
import { Operador } from '../../Modelos/Operador';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private servico:OperadorService, private router:Router){}
  formulario = new FormGroup({
    cnpj: new FormControl('',[Validators.required, Validators.maxLength(14), Validators.minLength(14)]),
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    senha:new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)])
  })

  login() {
    if(this.formulario.valid){
      const jsonLogin = {
        cnpj: (<HTMLInputElement>document.getElementById('cnpj-field')).value,
        email: this.formulario.value.email,
        password: this.formulario.value.senha
      }
      this.servico.login(jsonLogin).subscribe({
        next: () => this.router.navigate(['/homepage']),
        error: err => console.log(err.error.message)
      });
    }
    
   }
}
