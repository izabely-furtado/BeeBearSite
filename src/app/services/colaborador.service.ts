import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Colaborador, ColaboradorMock } from '../models/colaborador/colaborador';
import { environment } from '../../enviroments/environment';
import { Permissao, PermissaoMock } from 'app/models/permissao';

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  url = environment.apiUrl + '/colaborador';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllColaboradors(): Observable<Colaborador[]> {
    if (environment.mock) {
        return of(ColaboradorMock.getMockArray(20));
    }
    else {
        return this.http.get<Colaborador[]>(this.url);
    }
  }

  // Retorna um pelo ID
  getColaboradorById(id: number): Observable<Colaborador> {
    if (environment.mock) {
        return of(ColaboradorMock.getMock());
    }
    else {
        return this.http.get<Colaborador>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID e pelo id do evento
  getColaboradorByIdEventoId(idEvento: number, id: number): Observable<Colaborador> {
    if (environment.mock) {
        return of(ColaboradorMock.getMock());
    }
    else {
        return this.http.get<Colaborador>(`${this.url}/evento/${idEvento}/colaborador/${id}`);
    }
  }

  // Retorna todos vinculados ao evento
  getAllColaboradorsByIdEvento(id: number): Observable<Colaborador[]> {
    if (environment.mock) {
        return of(ColaboradorMock.getMockArray(20));
    }
    else {
        return this.http.get<Colaborador[]>(`${this.url}/evento/${id}`);
    }
  }

  // Retorna todos vinculados a empresa
  getAllColaboradorsByIdEmpresa(id: number): Observable<Colaborador[]> {
    if (environment.mock) {
        return of(ColaboradorMock.getMockArray(20));
    }
    else {
        return this.http.get<Colaborador[]>(`${this.url}/empresa/${id}`);
    }
  }

  // Retorna um pelo ID
  getAllPermissoes(id: number): Observable<Permissao[]> {
    if (environment.mock) {
        return of(PermissaoMock.getMockArray(10));
    }
    else {
        return this.http.get<Permissao[]>(`${this.url}/permissao/${id}`);
    }
  }

  // Adiciona um novo
  addColaborador(perfil: Colaborador): Observable<Colaborador> {
    if (environment.mock) {
        return of(ColaboradorMock.getMock());
    }
    else {
        return this.http.post<Colaborador>(this.url, perfil);
    }
  }

  // Adiciona um novo ao evento
  addColaboradorEvento(perfil: Colaborador, idEvento: number): Observable<Colaborador> {
    if (environment.mock) {
        return of(ColaboradorMock.getMock());
    }
    else {
        return this.http.post<Colaborador>(`${this.url}/${idEvento}`, perfil);
    }
  }

  // Atualiza um existente
  updateColaborador(perfil: Colaborador): Observable<Colaborador> {
    if (environment.mock) {
        return of(ColaboradorMock.getMock());
    }
    else {
        return this.http.put<Colaborador>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteColaboradorById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteColaboradorByIdEvento(id: number, idEvento: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${idEvento}/${id}`);
    }
  }

}
