import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Endereco, EnderecoMock } from 'app/models/endereco/endereco';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  url = environment.apiUrl + '/endereco';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllEnderecos(): Observable<Endereco[]> {
    if (environment.mock) {
        return of(EnderecoMock.getMockArray(20));
    }
    else {
        return this.http.get<Endereco[]>(this.url);
    }
  }

  // Retorna todos cadastrados na empresa
  getAllEnderecosEmpresa(idEmpresa: number): Observable<Endereco[]> {
    if (environment.mock) {
        return of(EnderecoMock.getMockArray(20));
    }
    else {
        return this.http.get<Endereco[]>(`${this.url}/${idEmpresa}`);
    }
  }

  // Retorna um pelo ID
  getEnderecoById(id: number): Observable<Endereco> {
    if (environment.mock) {
        return of(EnderecoMock.getMock());
    }
    else {
        return this.http.get<Endereco>(`${this.url}/${id}`);
    }
  }

  // Retorna um pelo ID do Evento
  getEnderecoByIdEvento(id: number): Observable<Endereco> {
    if (environment.mock) {
        return of(EnderecoMock.getMock());
    }
    else {
        return this.http.get<Endereco>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addEndereco(item: Endereco): Observable<Endereco> {
    if (environment.mock) {
        return of(EnderecoMock.getMock());
    }
    else {
        return this.http.post<Endereco>(this.url, item);
    }
  }

  // Adiciona um novo endereço ao evento
  addEnderecoEvento(item: Endereco): Observable<Endereco> {
    if (environment.mock) {
        return of(EnderecoMock.getMock());
    }
    else {
        return this.http.post<Endereco>(this.url, item);
    }
  }

  // Atualiza um existente
  updateEndereco(item: Endereco): Observable<Endereco> {
    if (environment.mock) {
        return of(EnderecoMock.getMock());
    }
    else {
        return this.http.put<Endereco>(`${this.url}/${item.id}`, item);
    }
  }

  // Atualiza um existente em evento
  updateEnderecoEvento(item: Endereco): Observable<Endereco> {
    if (environment.mock) {
        return of(EnderecoMock.getMock());
    }
    else {
        return this.http.put<Endereco>(`${this.url}/${item.id}`, item);
    }
  }

  // Remove um pelo ID
  deleteEnderecoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteEnderecoByIdEvento(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
