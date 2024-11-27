import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { PlanoContratado, PlanoContratadoMock } from 'app/models/empresa/plano-contratado';

@Injectable({
  providedIn: 'root',
})
export class PlanoContratadoService {
  url = environment.apiUrl + '/plano_contrato';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllPlanoContratados(): Observable<PlanoContratado[]> {
    if (environment.mock) {
        return of(PlanoContratadoMock.getMockArray(20));
    }
    else {
        return this.http.get<PlanoContratado[]>(this.url);
    }
  }

  getAllPlanoContratadosTrio(): Observable<PlanoContratado[]> {
    if (environment.mock) {
        return of(PlanoContratadoMock.getMockArrayTrio());
    }
    else {
        return this.http.get<PlanoContratado[]>(this.url);
    }
  }

  // Retorna um produto pelo ID
  getPlanoContratadoById(id: number): Observable<PlanoContratado> {
    if (environment.mock) {
        return of(PlanoContratadoMock.getMock());
    }
    else {
        return this.http.get<PlanoContratado>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addPlanoContratado(empresa: PlanoContratado): Observable<PlanoContratado> {
    if (environment.mock) {
        return of(PlanoContratadoMock.getMock());
    }
    else {
        return this.http.post<PlanoContratado>(this.url, empresa);
    }
  }

  // Atualiza um existente
  updatePlanoContratado(empresa: PlanoContratado): Observable<PlanoContratado> {
    if (environment.mock) {
        return of(PlanoContratadoMock.getMock());
    }
    else {
        return this.http.put<PlanoContratado>(`${this.url}/${empresa.id}`, empresa);
    }
  }

  // Remove um pelo ID
  deletePlanoContratadoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
