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

  constructor(private servico:OperadorService, private router:Router){}

  formulario = new FormGroup({
    cnpj: new FormControl('',[Validators.required, Validators.maxLength(18), Validators.minLength(18)]),
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    senha:new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(12)])
  })

  login() {
    this.servico.login(this.formulario.value.cnpj, this.formulario.value.email, this.formulario.value.senha).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: err => alert('Erro ao fazer login: ' + err.error.message)
    });
  }
}
