import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Operador } from '../Modelos/Operador';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://sua-api.com';
  private authSubject = new BehaviorSubject<boolean>(this.hasToken());

  login(cnpj:string, email: string, senha: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, senha })
      .pipe(
        map(response => {
          localStorage.setItem('token', response.token);
          this.authSubject.next(true);
          return response;
        })
      );
  }

  isAuthenticated(): Observable<boolean> {
    return this.authSubject.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}