import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Cupom, CupomMock } from 'app/models/desconto/cupom';

@Injectable({
  providedIn: 'root',
})
export class CupomService {
  url = environment.apiUrl + '/cupom';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllCupoms(): Observable<Cupom[]> {
    if (environment.mock) {
        return of(CupomMock.getMockArray(20));
    }
    else {
        return this.http.get<Cupom[]>(this.url);
    }
  }

  // Retorna todos cadastrados na empresa
  getAllCupomsEmpresa(idEmpresa: number): Observable<Cupom[]> {
    if (environment.mock) {
        return of(CupomMock.getMockArray(20));
    }
    else {
        return this.http.get<Cupom[]>(`${this.url}/empresa/${idEmpresa}`);
    }
  }

  // Retorna todos cadastrados na evento
  getAllCupomsEvento(idEvento: number): Observable<Cupom[]> {
    if (environment.mock) {
        return of(CupomMock.getMockArray(20));
    }
    else {
        return this.http.get<Cupom[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna um pelo ID
  getCupomById(id: number): Observable<Cupom> {
    if (environment.mock) {
        return of(CupomMock.getMock());
    }
    else {
        return this.http.get<Cupom>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID do Evento
  getCupomByIdEventoIdCupom(idEvento: number, idCupom: number): Observable<Cupom> {
    if (environment.mock) {
        return of(CupomMock.getMock());
    }
    else {
        return this.http.get<Cupom>(`${this.url}/evento/${idEvento}/regra/${idCupom}`);
    }
  }

  // Adiciona um novo
  addCupom(item: Cupom): Observable<Cupom> {
    if (environment.mock) {
        return of(CupomMock.getMock());
    }
    else {
        return this.http.post<Cupom>(this.url, item);
    }
  }

  // Adiciona um novo regra ao evento
  addCupomEvento(item: Cupom): Observable<Cupom> {
    if (environment.mock) {
        return of(CupomMock.getMock());
    }
    else {
        return this.http.post<Cupom>(this.url, item);
    }
  }

  // Atualiza um existente
  updateCupom(item: Cupom): Observable<Cupom> {
    if (environment.mock) {
        return of(CupomMock.getMock());
    }
    else {
        return this.http.put<Cupom>(`${this.url}/${item.id}`, item);
    }
  }

  // Atualiza um existente em evento
  updateCupomEvento(item: Cupom): Observable<Cupom> {
    if (environment.mock) {
        return of(CupomMock.getMock());
    }
    else {
        return this.http.put<Cupom>(`${this.url}/${item.id}`, item);
    }
  }

  // Remove um pelo ID
  deleteCupomById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteCupomByIdEvento(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
