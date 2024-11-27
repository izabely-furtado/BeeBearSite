import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Lote, LoteMock } from 'app/models/produto/ingresso/lote';

@Injectable({
  providedIn: 'root',
})
export class LoteService {
  url = environment.apiUrl + '/lote';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllLotes(): Observable<Lote[]> {
    if (environment.mock) {
        return of(LoteMock.getMockArray(20));
    }
    else {
        return this.http.get<Lote[]>(this.url);
    }
  }

  // Retorna todos cadastrados na empresa
  getAllLotesEmpresa(idEmpresa: number): Observable<Lote[]> {
    if (environment.mock) {
        return of(LoteMock.getMockArray(20));
    }
    else {
        return this.http.get<Lote[]>(`${this.url}/empresa/${idEmpresa}`);
    }
  }

  // Retorna todos cadastrados na evento
  getAllLotesEvento(idEvento: number): Observable<Lote[]> {
    if (environment.mock) {
        return of(LoteMock.getMockArray(20));
    }
    else {
        return this.http.get<Lote[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna um pelo ID
  getLoteById(id: number): Observable<Lote> {
    if (environment.mock) {
        return of(LoteMock.getMock());
    }
    else {
        return this.http.get<Lote>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID do Evento
  getLoteByIdEventoIdLote(idEvento: number, idLote: number): Observable<Lote> {
    if (environment.mock) {
        return of(LoteMock.getMock());
    }
    else {
        return this.http.get<Lote>(`${this.url}/evento/${idEvento}/regra/${idLote}`);
    }
  }

  // Adiciona um novo
  addLote(item: Lote): Observable<Lote> {
    if (environment.mock) {
        return of(LoteMock.getMock());
    }
    else {
        return this.http.post<Lote>(this.url, item);
    }
  }

  // Adiciona um novo regra ao evento
  addLoteEvento(item: Lote): Observable<Lote> {
    if (environment.mock) {
        return of(LoteMock.getMock());
    }
    else {
        return this.http.post<Lote>(this.url, item);
    }
  }

  // Atualiza um existente
  updateLote(item: Lote): Observable<Lote> {
    if (environment.mock) {
        return of(LoteMock.getMock());
    }
    else {
        return this.http.put<Lote>(`${this.url}/${item.id}`, item);
    }
  }

  // Atualiza um existente em evento
  updateLoteEvento(item: Lote): Observable<Lote> {
    if (environment.mock) {
        return of(LoteMock.getMock());
    }
    else {
        return this.http.put<Lote>(`${this.url}/${item.id}`, item);
    }
  }

  // Remove um pelo ID
  deleteLoteById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteLoteByIdEvento(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
