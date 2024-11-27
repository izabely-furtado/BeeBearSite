import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Cliente, ClienteMock } from 'app/models/empresa/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  url = environment.apiUrl + '/cliente';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllClientes(): Observable<Cliente[]> {
    if (environment.mock) {
        return of(ClienteMock.getMockArray(20));
    }
    else {
        return this.http.get<Cliente[]>(this.url);
    }
  }

  // Retorna um produto pelo ID
  getClienteById(id: number): Observable<Cliente> {
    if (environment.mock) {
        return of(ClienteMock.getMock());
    }
    else {
        return this.http.get<Cliente>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addCliente(empresa: Cliente): Observable<Cliente> {
    if (environment.mock) {
        return of(ClienteMock.getMock());
    }
    else {
        return this.http.post<Cliente>(this.url, empresa);
    }
  }

  // Atualiza um existente
  updateCliente(empresa: Cliente): Observable<Cliente> {
    if (environment.mock) {
        return of(ClienteMock.getMock());
    }
    else {
        return this.http.put<Cliente>(`${this.url}/${empresa.id}`, empresa);
    }
  }

  // Remove um pelo ID
  deleteClienteById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
