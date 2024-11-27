import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { NomeLista, NomeListaMock } from 'app/models/desconto/nome_lista';

@Injectable({
  providedIn: 'root',
})
export class NomeListaService {
  url = environment.apiUrl + '/nome_lista';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllNomeListas(): Observable<NomeLista[]> {
    if (environment.mock) {
        return of(NomeListaMock.getMockArray(20));
    }
    else {
        return this.http.get<NomeLista[]>(this.url);
    }
  }

  // Retorna todos cadastrados na empresa
  getAllNomeListasEmpresa(idEmpresa: number): Observable<NomeLista[]> {
    if (environment.mock) {
        return of(NomeListaMock.getMockArray(20));
    }
    else {
        return this.http.get<NomeLista[]>(`${this.url}/empresa/${idEmpresa}`);
    }
  }

  // Retorna todos cadastrados na evento
  getAllNomeListasEvento(idEvento: number): Observable<NomeLista[]> {
    if (environment.mock) {
        return of(NomeListaMock.getMockArray(20));
    }
    else {
        return this.http.get<NomeLista[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna um pelo ID
  getNomeListaById(id: number): Observable<NomeLista> {
    if (environment.mock) {
        return of(NomeListaMock.getMock());
    }
    else {
        return this.http.get<NomeLista>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID do Evento
  getNomeListaByIdEventoIdNomeLista(idEvento: number, idNomeLista: number): Observable<NomeLista> {
    if (environment.mock) {
        return of(NomeListaMock.getMock());
    }
    else {
        return this.http.get<NomeLista>(`${this.url}/evento/${idEvento}/regra/${idNomeLista}`);
    }
  }

  // Adiciona um novo
  addNomeLista(item: NomeLista): Observable<NomeLista> {
    if (environment.mock) {
        return of(NomeListaMock.getMock());
    }
    else {
        return this.http.post<NomeLista>(this.url, item);
    }
  }

  // Adiciona um novo regra ao evento
  addNomeListaEvento(item: NomeLista): Observable<NomeLista> {
    if (environment.mock) {
        return of(NomeListaMock.getMock());
    }
    else {
        return this.http.post<NomeLista>(this.url, item);
    }
  }

  // Atualiza um existente
  updateNomeLista(item: NomeLista): Observable<NomeLista> {
    if (environment.mock) {
        return of(NomeListaMock.getMock());
    }
    else {
        return this.http.put<NomeLista>(`${this.url}/${item.id}`, item);
    }
  }

  // Atualiza um existente em evento
  updateNomeListaEvento(item: NomeLista): Observable<NomeLista> {
    if (environment.mock) {
        return of(NomeListaMock.getMock());
    }
    else {
        return this.http.put<NomeLista>(`${this.url}/${item.id}`, item);
    }
  }

  // Remove um pelo ID
  deleteNomeListaById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteNomeListaByIdEvento(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
