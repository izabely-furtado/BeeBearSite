import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Contato, ContatoMock } from 'app/models/colaborador/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  url = environment.apiUrl + '/contato';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllContatos(): Observable<Contato[]> {
    if (environment.mock) {
        return of(ContatoMock.getMockArray(20));
    }
    else {
        return this.http.get<Contato[]>(this.url);
    }
  }

  // Retorna um pelo ID
  getContatoById(id: number): Observable<Contato> {
    if (environment.mock) {
        return of(ContatoMock.getMock());
    }
    else {
        return this.http.get<Contato>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID do Evento
  getContatoByIdEmpresa(id: number): Observable<Contato> {
    if (environment.mock) {
        return of(ContatoMock.getMock());
    }
    else {
        return this.http.get<Contato>(`${this.url}/empresa/${id}`);
    }
  }

  // Retorna um pelo ID do Evento
  getContatoByIdEvento(id: number): Observable<Contato> {
    if (environment.mock) {
        return of(ContatoMock.getMock());
    }
    else {
        return this.http.get<Contato>(`${this.url}/evento/${id}`);
    }
  }

  // Retorna um pelo ID do Usuario
  getContatoByIdUsuario(id: number): Observable<Contato> {
    if (environment.mock) {
        return of(ContatoMock.getMock());
    }
    else {
        return this.http.get<Contato>(`${this.url}/usuario/${id}`);
    }
  }

  // Adiciona um novo
  addContato(item: Contato): Observable<Contato> {
    if (environment.mock) {
        return of(ContatoMock.getMock());
    }
    else {
        return this.http.post<Contato>(this.url, item);
    }
  }

  // Adiciona um novo endereço ao evento
  addContatoEvento(item: Contato): Observable<Contato> {
    if (environment.mock) {
        return of(ContatoMock.getMock());
    }
    else {
        return this.http.post<Contato>(this.url, item);
    }
  }

  // Atualiza um existente
  updateContato(item: Contato): Observable<Contato> {
    if (environment.mock) {
        return of(ContatoMock.getMock());
    }
    else {
        return this.http.put<Contato>(`${this.url}/${item.id}`, item);
    }
  }

  // Atualiza um existente em evento
  updateContatoEvento(item: Contato): Observable<Contato> {
    if (environment.mock) {
        return of(ContatoMock.getMock());
    }
    else {
        return this.http.put<Contato>(`${this.url}/${item.id}`, item);
    }
  }

  // Remove um pelo ID
  deleteContatoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteContatoByIdEvento(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
