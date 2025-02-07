import { CommonModule, NgLocalization } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OperadorService } from '../../Servico/operador.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}

  formulario = new FormGroup({
    cnpj: new FormControl('',[Validators.required, Validators.maxLength(18), Validators.minLength(18)]),
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    senha:new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(12)])
  })

  servicoLogin: OperadorService | undefined;

  // async login(): {
  //   try{
  //     const resultado = await this.servicoLogin.login()
  //   }
  //   console.log("Funca")
  //   // this.router.navigate(['/homepage']);
  // }
}
