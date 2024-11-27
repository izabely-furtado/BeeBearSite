import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empresa, EmpresaMock } from '../models/empresa/empresa';
import { environment } from '../../enviroments/environment';
import { AreaAtuacaoEnum } from 'app/models/enum/area-atuacao.enum';
import { SituacaoEnum } from 'app/models/enum/situacao.enum';
import { Parceiro, ParceiroMock } from 'app/models/empresa/parceiro';
import { Colaborador, ColaboradorMock } from 'app/models/colaborador/colaborador';
import { Endereco, EnderecoMock } from 'app/models/endereco/endereco';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  url = environment.apiUrl + '/empresa';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllEmpresas(): Observable<Empresa[]> {
    if (environment.mock) {
        return of(EmpresaMock.getMockArray(20));
    }
    else {
        return this.http.get<Empresa[]>(this.url);
    }
  }

  // Retorna todos
  getAllParceiros(id: number): Observable<Parceiro[]> {
    if (environment.mock) {
        return of(ParceiroMock.getMockArray(20));
    }
    else {
      return this.http.get<Parceiro[]>(`${this.url}/parceiro/${id}`);
    }
  }

  // Retorna todos
  getAllColaboradores(id: number): Observable<Colaborador[]> {
    if (environment.mock) {
        return of(ColaboradorMock.getMockArray(20));
    }
    else {
      return this.http.get<Colaborador[]>(`${this.url}/colaborador/${id}`);
    }
  }

  // Retorna todos
  getAllEnderecos(id: number): Observable<Endereco[]> {
    if (environment.mock) {
        return of(EnderecoMock.getMockArray(20));
    }
    else {
      return this.http.get<Endereco[]>(`${this.url}/endereco/${id}`);
    }
  }

  // Retorna todos
  getEmpresasByArea(area: AreaAtuacaoEnum): Observable<Empresa[]> {
    if (environment.mock) {
        return of(EmpresaMock.getMockArrayByArea(20, area));
    }
    else {
      return this.http.get<Empresa[]>(`${this.url}/area/${area}`);
    }
  }

  // Retorna todos
  getEmpresasBySituacao(situacao: SituacaoEnum): Observable<Empresa[]> {
    if (environment.mock) {
        return of(EmpresaMock.getMockArrayBySituacao(20, situacao));
    }
    else {
      return this.http.get<Empresa[]>(`${this.url}/situacao/${situacao}`);
    }
  }

  // Retorna um produto pelo ID
  getEmpresaById(id: number): Observable<Empresa> {
    if (environment.mock) {
        return of(EmpresaMock.getMock());
    }
    else {
        return this.http.get<Empresa>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addEmpresa(empresa: Empresa): Observable<Empresa> {
    if (environment.mock) {
        return of(EmpresaMock.getMock());
    }
    else {
        return this.http.post<Empresa>(this.url, empresa);
    }
  }

  // Atualiza um existente
  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    if (environment.mock) {
        return of(EmpresaMock.getMock());
    }
    else {
        return this.http.put<Empresa>(`${this.url}/${empresa.id}`, empresa);
    }
  }

  // Remove um pelo ID
  deleteEmpresaById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
