import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Operador } from '../Modelos/Operador';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7034';
  private authSubject = new BehaviorSubject<boolean>(this.hasToken());

  // jsonLogin: Operador
  login(credenciais: {cnpj:string, email: string, password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<{ token: string, user: Operador }>(
      `${this.apiUrl}/user/login`,
      JSON.stringify(credenciais),
      { headers }
    ).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify({
          id: response.user.id,
          nome: response.user.name,
          email: response.user.email,
          empresaId: response.user.empresa_Id,
        }))
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

  logout(): void {
    localStorage.removeItem('token');
    this.authSubject.next(false);
  }
}