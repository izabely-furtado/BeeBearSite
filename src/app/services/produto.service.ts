import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Produto, ProdutoMock } from 'app/models/produto/produto';
import { TipoProdutoEnum } from 'app/models/enum/tipo-produto.enum';
import { Bebida, BebidaMock } from 'app/models/produto/bebida';
import { Comida, ComidaMock } from 'app/models/produto/comida';
import { Brinde, BrindeMock } from 'app/models/produto/brinde';
import { ProdutoEvento, ProdutoEventoMock } from 'app/models/produto/produto_evento';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  url = environment.apiUrl + '/produto';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllProdutos(): Observable<Produto[]> {
    if (environment.mock) {
        return of(ProdutoMock.getMockArray(20));
    }
    else {
        return this.http.get<Produto[]>(this.url);
    }
  }

  // Retorna um produto pelo ID
  getProdutoById(id: number): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.get<Produto>(`${this.url}/${id}`);
    }
  }

  getProdutoEventoById(id: number): Observable<ProdutoEvento> {
    if (environment.mock) {
        return of(ProdutoEventoMock.getMock());
    }
    else {
        return this.http.get<ProdutoEvento>(`${this.url}/${id}`);
    }
  }

  // Retorna todos vinculados a um evento
  getAllProdutosEvento(idEvento: number): Observable<ProdutoEvento[]> {
    if (environment.mock) {
        return of(ProdutoEventoMock.getMockArray(20));
    }
    else {
        return this.http.get<ProdutoEvento[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna todos vinculados a uma empresa
  getAllProdutosEmpresa(idEmpresa: number): Observable<Produto[]> {
    if (environment.mock) {
        return of(ProdutoMock.getMockArray(20));
    }
    else {
        return this.http.get<Produto[]>(`${this.url}/empresa/${idEmpresa}`);
    }
  }

  getAllProdutosEventoEmpresa(idEmpresa: number): Observable<ProdutoEvento[]> {
    if (environment.mock) {
        return of(ProdutoEventoMock.getMockArray(20));
    }
    else {
        return this.http.get<ProdutoEvento[]>(`${this.url}/empresa/${idEmpresa}`);
    }
  }

  // Retorna todos vinculados a uma empresa
  getAllProdutosEmpresaByTipo(idEmpresa: number, tipo: TipoProdutoEnum): Observable<Produto[]> {
    if (environment.mock) {
        return of(ProdutoMock.getMockArrayByTipo(20, tipo));
    }
    else {
        return this.http.get<Produto[]>(`${this.url}/empresa/${idEmpresa}/tipo/${tipo}`);
    }
  }

  getAllProdutosEventoEmpresaByTipo(idEmpresa: number, tipo: TipoProdutoEnum): Observable<ProdutoEvento[]> {
    if (environment.mock) {
        return of(ProdutoEventoMock.getMockArray(20));
    }
    else {
        return this.http.get<ProdutoEvento[]>(`${this.url}/empresa/${idEmpresa}/tipo/${tipo}`);
    }
  }

  // Retorna todos do tipo de produto passado como parametro
  getAllByType(tipo: TipoProdutoEnum): Observable<Produto[]> {
    if (environment.mock) {
      return of(ProdutoMock.getMockArrayByTipo(20, tipo));
    }
    else {
      return this.http.get<Produto[]>(`${this.url}/tipo/${tipo}`);
    }
  }  

  // Adiciona um novo
  addProduto(perfil: Produto): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.post<Produto>(this.url, perfil);
    }
  }

  // Adiciona um novo ao evento
  addProdutoEvento(perfil: Produto, idEvento: number): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.post<Produto>(`${this.url}/${idEvento}`, perfil);
    }
  }

  // Atualiza um existente
  updateProduto(perfil: Produto): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.put<Produto>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteProdutoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

  // Remove um pelo ID do evento
  deleteProdutoByIdEvento(id: number, idEvento: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${idEvento}/${id}`);
    }
  }


  /////////////////////////BEBIDAS
  // Retorna um bebida pelo ID
  getBebidaById(id: number): Observable<Bebida> {
    if (environment.mock) {
        return of(BebidaMock.getMock());
    }
    else {
        return this.http.get<Bebida>(`${this.url}/bebida/${id}`);
    }
  }

  // Retorna todas as bebidas
  getAllBebidasSimples(): Observable<Produto[]> {
    return this.getAllByType(TipoProdutoEnum.bebida);
  }

  // Retorna todas as bebidas
  getAllBebidas(): Observable<Bebida[]> {
    if (environment.mock) {
        return of(BebidaMock.getMockArray(20));
    }
    else {
      return this.http.get<Bebida[]>(`${this.url}/bebida`);
    }
  }

  // Adiciona um novo
  addBebida(bebida: Bebida): Observable<Bebida> {
    if (environment.mock) {
        return of(BebidaMock.getMock());
    }
    else {
        return this.http.post<Bebida>(`${this.url}/bebida`, bebida);
    }
  }

  // Atualiza um existente
  updateBebida(bebida: Bebida): Observable<Bebida> {
    if (environment.mock) {
        return of(BebidaMock.getMock());
    }
    else {
        return this.http.put<Bebida>(`${this.url}/bebida/${bebida.produto.id}`, bebida);
    }
  }

  // Remove um pelo ID
  deleteBebidaById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/bebida/${id}`);
    }
  }

  /////////////////////////COMIDAS
  // Retorna um comida pelo ID
  getComidaById(id: number): Observable<Comida> {
    if (environment.mock) {
        return of(ComidaMock.getMock());
    }
    else {
        return this.http.get<Comida>(`${this.url}/comida/${id}`);
    }
  }

  // Retorna todas as comidas
  getAllComidasSimples(): Observable<Produto[]> {
    return this.getAllByType(TipoProdutoEnum.comida);
  }

  // Retorna todas as comidas
  getAllComidas(): Observable<Comida[]> {
    if (environment.mock) {
        return of(ComidaMock.getMockArray(20));
    }
    else {
      return this.http.get<Comida[]>(`${this.url}/comida`);
    }
  }

  // Adiciona um novo
  addComida(comida: Comida): Observable<Comida> {
    if (environment.mock) {
        return of(ComidaMock.getMock());
    }
    else {
        return this.http.post<Comida>(`${this.url}/comida`, comida);
    }
  }

  // Atualiza um existente
  updateComida(comida: Comida): Observable<Comida> {
    if (environment.mock) {
        return of(ComidaMock.getMock());
    }
    else {
        return this.http.put<Comida>(`${this.url}/comida/${comida.produto.id}`, comida);
    }
  }

  // Remove um pelo ID
  deleteComidaById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/comida/${id}`);
    }
  }

  /////////////////////////BRINDE
  // Retorna um brinde pelo ID
  getBrindeById(id: number): Observable<Brinde> {
    if (environment.mock) {
        return of(BrindeMock.getMock());
    }
    else {
        return this.http.get<Brinde>(`${this.url}/brinde/${id}`);
    }
  }

  // Retorna todos os brindes
  getAllBrindesSimples(): Observable<Produto[]> {
    return this.getAllByType(TipoProdutoEnum.brinde);
  }

  // Retorna todas os brindes
  getAllBrindes(): Observable<Brinde[]> {
    if (environment.mock) {
        return of(BrindeMock.getMockArray(20));
    }
    else {
      return this.http.get<Brinde[]>(`${this.url}/brinde`);
    }
  }

  // Adiciona um novo
  addBrinde(brinde: Brinde): Observable<Brinde> {
    if (environment.mock) {
        return of(BrindeMock.getMock());
    }
    else {
        return this.http.post<Brinde>(`${this.url}/brinde`, brinde);
    }
  }

  // Atualiza um existente
  updateBrinde(brinde: Brinde): Observable<Brinde> {
    if (environment.mock) {
        return of(BrindeMock.getMock());
    }
    else {
        return this.http.put<Brinde>(`${this.url}/brinde/${brinde.produto.id}`, brinde);
    }
  }

  // Remove um pelo ID
  deleteBrindeById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/brinde/${id}`);
    }
  }

  /////////////////////////OUTROS
  // Retorna todos outros produtos
  getAllOutrosSimples(): Observable<Produto[]> {
    return this.getAllByType(TipoProdutoEnum.outro);
  }

  // Retorna todas os outros
  getAllOutros(): Observable<Produto[]> {
    if (environment.mock) {
        return of(ProdutoMock.getMockArray(20));
    }
    else {
      return this.http.get<Produto[]>(`${this.url}/outro`);
    }
  }

  // Adiciona um novo
  addOutro(produto: Produto): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.post<Produto>(`${this.url}/outro`, produto);
    }
  }

  // Atualiza um existente
  updateOutro(produto: Produto): Observable<Produto> {
    if (environment.mock) {
        return of(ProdutoMock.getMock());
    }
    else {
        return this.http.put<Produto>(`${this.url}/outro/${produto.id}`, produto);
    }
  }

  // Remove um pelo ID
  deleteOutroById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/outro/${id}`);
    }
  }
  

  

}
