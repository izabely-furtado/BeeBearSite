import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Musico, MusicoMock } from 'app/models/musica/musico';

@Injectable({
  providedIn: 'root',
})
export class MusicoService {
  url = environment.apiUrl + '/area_musical/playlist';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllMusicos(): Observable<Musico[]> {
    if (environment.mock) {
        return of(MusicoMock.getMockArray(20));
    }
    else {
        return this.http.get<Musico[]>(this.url);
    }
  }

  // Retorna todos
  getAllMusicoEvento(idEvento: number): Observable<Musico[]> {
    if (environment.mock) {
        return of(MusicoMock.getMockArray(20));
    }
    else {
        return this.http.get<Musico[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna todos
  getAllMusicoEmpresa(idEmpresa: number): Observable<Musico[]> {
    if (environment.mock) {
        return of(MusicoMock.getMockArray(20));
    }
    else {
        return this.http.get<Musico[]>(`${this.url}/empresa/${idEmpresa}`);
    }
  }

  // Retorna um pelo ID
  getMusicoById(id: number): Observable<Musico> {
    if (environment.mock) {
        return of(MusicoMock.getMock());
    }
    else {
        return this.http.get<Musico>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addMusico(perfil: Musico): Observable<Musico> {
    if (environment.mock) {
        return of(MusicoMock.getMock());
    }
    else {
        return this.http.post<Musico>(this.url, perfil);
    }
  }

  // Atualiza um existente
  updateMusico(perfil: Musico): Observable<Musico> {
    if (environment.mock) {
        return of(MusicoMock.getMock());
    }
    else {
        return this.http.put<Musico>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteMusicoById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
