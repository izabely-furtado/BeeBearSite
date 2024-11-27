import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, UsuarioMock } from '../models/usuario/usuario';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = environment.apiUrl + '/usuario';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAll(): Observable<Usuario[]> {
    if (environment.mock) {
        return of(UsuarioMock.getMockArray(20));
    }
    else {
        return this.http.get<Usuario[]>(this.url);
    }
  }

  // Retorna um pelo ID
  getById(id: number): Observable<Usuario> {
    if (environment.mock) {
        return of(UsuarioMock.getMock());
    }
    else {
        return this.http.get<Usuario>(`${this.url}/id/${id}`);
    }
  }

  // Adiciona um novo
  add(perfil: Usuario): Observable<Usuario> {
    if (environment.mock) {
        return of(UsuarioMock.getMock());
    }
    else {
        return this.http.post<Usuario>(this.url, perfil);
    }
  }

  // Atualiza um existente
  update(perfil: Usuario): Observable<Usuario> {
    if (environment.mock) {
        return of(UsuarioMock.getMock());
    }
    else {
        return this.http.put<Usuario>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/id/${id}`);
    }
  }

}
