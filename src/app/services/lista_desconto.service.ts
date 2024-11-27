import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { ListaDesconto, ListaDescontoMock } from 'app/models/desconto/lista_desconto';

@Injectable({
  providedIn: 'root',
})
export class ListaDescontoService {
  url = environment.apiUrl + '/lista_desconto';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllListaDescontos(): Observable<ListaDesconto[]> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMockArray(20));
    }
    else {
        return this.http.get<ListaDesconto[]>(this.url);
    }
  }

  // Retorna todos cadastrados na empresa
  getAllListaDescontosEmpresa(idEmpresa: number): Observable<ListaDesconto[]> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMockArray(20));
    }
    else {
        return this.http.get<ListaDesconto[]>(`${this.url}/empresa/${idEmpresa}`);
    }
  }

  // Retorna todos cadastrados na evento
  getAllListaDescontosEvento(idEvento: number): Observable<ListaDesconto[]> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMockArray(20));
    }
    else {
        return this.http.get<ListaDesconto[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna um pelo ID
  getListaDescontoById(id: number): Observable<ListaDesconto> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMock());
    }
    else {
        return this.http.get<ListaDesconto>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID do Evento
  getListaDescontoByIdEventoIdListaDesconto(idEvento: number, idListaDesconto: number): Observable<ListaDesconto> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMock());
    }
    else {
        return this.http.get<ListaDesconto>(`${this.url}/evento/${idEvento}/regra/${idListaDesconto}`);
    }
  }

  // Adiciona um novo
  addListaDesconto(item: ListaDesconto): Observable<ListaDesconto> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMock());
    }
    else {
        return this.http.post<ListaDesconto>(this.url, item);
    }
  }

  // Adiciona um novo regra ao evento
  addListaDescontoEvento(item: ListaDesconto): Observable<ListaDesconto> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMock());
    }
    else {
        return this.http.post<ListaDesconto>(this.url, item);
    }
  }

  // Atualiza um existente
  updateListaDesconto(item: ListaDesconto): Observable<ListaDesconto> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMock());
    }
    else {
        return this.http.put<ListaDesconto>(`${this.url}/${item.id}`, item);
    }
  }

  // Atualiza um existente em evento
  updateListaDescontoEvento(item: ListaDesconto): Observable<ListaDesconto> {
    if (environment.mock) {
        return of(ListaDescontoMock.getMock());
    }
    else {
        return this.http.put<ListaDesconto>(`${this.url}/${item.id}`, item);
    }
  }

  // Remove um pelo ID
  deleteListaDescontoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteListaDescontoByIdEvento(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
