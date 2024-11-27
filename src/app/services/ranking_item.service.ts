import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { RankingItem, RankingItemMock } from 'app/models/ranking/ranking_item';

@Injectable({
  providedIn: 'root',
})
export class RankingItemService {
  url = environment.apiUrl + '/ranking';

  constructor(private http: HttpClient) {}

  // Retorna 3 primeiros
  getColaboradoresDeElite(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getInfluenciadoresInfluentes(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getPlaylistComMaisPlay(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventosMaisLotados(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventoMaisVendaProduto(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getProdutosMaisVendidos(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getProdutosMaisVendidosBEEBEAR(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getProdutosMaisVendidosPorcentagem(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventosVendaMaisRapidaTotal(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventosVendaMaisRapida100(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getProdutosMenosComprados(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEntregadoresQNEntregam(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventoMaisVazio(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventoMenosVendaProduto(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventoMaiorDesistencia(): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }



  //////////////////////AGORA CONSIDERANDO TEMPO
  // Retorna 3 primeiros
  getColaboradoresDeEliteNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getInfluenciadoresInfluentesNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getPlaylistComMaisPlayNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventosMaisLotadosNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventoMaisVendaProdutoNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getProdutosMaisVendidosNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getProdutosMaisVendidosBEEBEARNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getProdutosMaisVendidosPorcentagemNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventosVendaMaisRapidaTotalNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventosVendaMaisRapida100NoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getProdutosMenosCompradosNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEntregadoresQNEntregamNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventoMaisVazioNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventoMenosVendaProdutoNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }

  // Retorna 3 primeiros
  getEventoMaiorDesistenciaNoTempo(inicio: Date, fim: Date): Observable<RankingItem[]> {
    if (environment.mock) {
        return of(RankingItemMock.getMockArray(3));
    }
    else {
        return this.http.get<RankingItem[]>(this.url);
    }
  }



  

}
