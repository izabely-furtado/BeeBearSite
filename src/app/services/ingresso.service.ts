import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingresso, IngressoMock } from '../models/produto/ingresso/ingresso';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class IngressoService {
  url = environment.apiUrl + '/ingresso';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllIngressos(): Observable<Ingresso[]> {
    if (environment.mock) {
        return of(IngressoMock.getMockArray(20));
    }
    else {
        return this.http.get<Ingresso[]>(this.url);
    }
  }

  getAllIngressosLote(idLote: number): Observable<Ingresso[]> {
    if (environment.mock) {
        return of(IngressoMock.getMockArray(20));
    }
    else {
        return this.http.get<Ingresso[]>(`${this.url}/lote/${idLote}`);
    }
  }

  // Retorna um pelo ID
  getIngressoById(id: number): Observable<Ingresso> {
    if (environment.mock) {
        return of(IngressoMock.getMock());
    }
    else {
        return this.http.get<Ingresso>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addIngresso(perfil: Ingresso): Observable<Ingresso> {
    if (environment.mock) {
        return of(IngressoMock.getMock());
    }
    else {
        return this.http.post<Ingresso>(this.url, perfil);
    }
  }

  // Atualiza um existente
  updateIngresso(perfil: Ingresso): Observable<Ingresso> {
    if (environment.mock) {
        return of(IngressoMock.getMock());
    }
    else {
        return this.http.put<Ingresso>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteIngressoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
