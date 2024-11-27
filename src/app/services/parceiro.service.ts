import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Parceiro, ParceiroMock } from 'app/models/empresa/parceiro';

@Injectable({
  providedIn: 'root',
})
export class ParceiroService {
  url = environment.apiUrl + '/parceiro';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllParceiros(): Observable<Parceiro[]> {
    if (environment.mock) {
        return of(ParceiroMock.getMockArray(20));
    }
    else {
        return this.http.get<Parceiro[]>(this.url);
    }
  }

  // Retorna um pelo ID
  getParceiroById(id: number): Observable<Parceiro> {
    if (environment.mock) {
        return of(ParceiroMock.getMock());
    }
    else {
        return this.http.get<Parceiro>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID e pelo id do evento
  getParceiroByIdEventoId(idEvento: number, id: number): Observable<Parceiro> {
    if (environment.mock) {
        return of(ParceiroMock.getMock());
    }
    else {
        return this.http.get<Parceiro>(`${this.url}/evento/${idEvento}/parceiro/${id}`);
    }
  }

  // Retorna todos vinculados ao evento
  getAllParceirosByIdEvento(id: number): Observable<Parceiro[]> {
    if (environment.mock) {
        return of(ParceiroMock.getMockArray(20));
    }
    else {
        return this.http.get<Parceiro[]>(`${this.url}/evento/${id}`);
    }
  }

  // Retorna todos vinculados a empresa
  getAllParceirosByIdEmpresa(id: number): Observable<Parceiro[]> {
    if (environment.mock) {
        return of(ParceiroMock.getMockArray(20));
    }
    else {
        return this.http.get<Parceiro[]>(`${this.url}/empresa/${id}`);
    }
  }

  // Adiciona um novo
  addParceiro(perfil: Parceiro): Observable<Parceiro> {
    if (environment.mock) {
        return of(ParceiroMock.getMock());
    }
    else {
        return this.http.post<Parceiro>(this.url, perfil);
    }
  }

  // Adiciona um novo ao evento
  addParceiroEvento(perfil: Parceiro, idEvento: number): Observable<Parceiro> {
    if (environment.mock) {
        return of(ParceiroMock.getMock());
    }
    else {
        return this.http.post<Parceiro>(`${this.url}/${idEvento}`, perfil);
    }
  }

  // Atualiza um existente
  updateParceiro(perfil: Parceiro): Observable<Parceiro> {
    if (environment.mock) {
        return of(ParceiroMock.getMock());
    }
    else {
        return this.http.put<Parceiro>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteParceiroById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteParceiroByIdEvento(id: number, idEvento: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${idEvento}/${id}`);
    }
  }

}
