import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operador } from '../Modelos/Operador';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  url:string = "caminho";

  constructor(private http:HttpClient) { }

    login(operador: Operador){
      return new Promise((resolve) =>{
         window.localStorage.setItem('token','meu-token');
         window.localStorage.setItem('user',operador.id+"");
         resolve(true);
      })
    }

  
}
