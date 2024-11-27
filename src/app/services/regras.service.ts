import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Regra, RegraMock } from 'app/models/regra';

@Injectable({
  providedIn: 'root',
})
export class RegraService {
  url = environment.apiUrl + '/endereco';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllRegras(): Observable<Regra[]> {
    if (environment.mock) {
        return of(RegraMock.getMockArray(20));
    }
    else {
        return this.http.get<Regra[]>(this.url);
    }
  }

  // Retorna todos cadastrados na empresa
  getAllRegrasEmpresa(idEmpresa: number): Observable<Regra[]> {
    if (environment.mock) {
        return of(RegraMock.getMockArray(20));
    }
    else {
        return this.http.get<Regra[]>(`${this.url}/empresa/${idEmpresa}`);
    }
  }

  // Retorna todos cadastrados na evento
  getAllRegrasEvento(idEvento: number): Observable<Regra[]> {
    if (environment.mock) {
        return of(RegraMock.getMockArray(20));
    }
    else {
        return this.http.get<Regra[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna um pelo ID
  getRegraById(id: number): Observable<Regra> {
    if (environment.mock) {
        return of(RegraMock.getMock());
    }
    else {
        return this.http.get<Regra>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID do Evento
  getRegraByIdEventoIdRegra(idEvento: number, idRegra: number): Observable<Regra> {
    if (environment.mock) {
        return of(RegraMock.getMock());
    }
    else {
        return this.http.get<Regra>(`${this.url}/evento/${idEvento}/regra/${idRegra}`);
    }
  }

  // Adiciona um novo
  addRegra(item: Regra): Observable<Regra> {
    if (environment.mock) {
        return of(RegraMock.getMock());
    }
    else {
        return this.http.post<Regra>(this.url, item);
    }
  }

  // Adiciona um novo regra ao evento
  addRegraEvento(item: Regra): Observable<Regra> {
    if (environment.mock) {
        return of(RegraMock.getMock());
    }
    else {
        return this.http.post<Regra>(this.url, item);
    }
  }

  // Atualiza um existente
  updateRegra(item: Regra): Observable<Regra> {
    if (environment.mock) {
        return of(RegraMock.getMock());
    }
    else {
        return this.http.put<Regra>(`${this.url}/${item.id}`, item);
    }
  }

  // Atualiza um existente em evento
  updateRegraEvento(item: Regra): Observable<Regra> {
    if (environment.mock) {
        return of(RegraMock.getMock());
    }
    else {
        return this.http.put<Regra>(`${this.url}/${item.id}`, item);
    }
  }

  // Remove um pelo ID
  deleteRegraById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteRegraByIdEvento(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
