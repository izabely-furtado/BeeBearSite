import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { AreaMusical, AreaMusicalMock } from 'app/models/musica/area-musical';

@Injectable({
  providedIn: 'root',
})
export class AreaMusicalService {
  url = environment.apiUrl + '/area_musical';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllAreaMusicals(): Observable<AreaMusical[]> {
    if (environment.mock) {
        return of(AreaMusicalMock.getMockArray(20));
    }
    else {
        return this.http.get<AreaMusical[]>(this.url);
    }
  }

  // Retorna todos
  getAllAreaMusicalEvento(idEvento: number): Observable<AreaMusical[]> {
    if (environment.mock) {
        return of(AreaMusicalMock.getMockArray(20));
    }
    else {
        return this.http.get<AreaMusical[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna um pelo ID
  getAreaMusicalById(id: number): Observable<AreaMusical> {
    if (environment.mock) {
        return of(AreaMusicalMock.getMock());
    }
    else {
        return this.http.get<AreaMusical>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addAreaMusical(perfil: AreaMusical): Observable<AreaMusical> {
    if (environment.mock) {
        return of(AreaMusicalMock.getMock());
    }
    else {
        return this.http.post<AreaMusical>(this.url, perfil);
    }
  }

  // Atualiza um existente
  updateAreaMusical(perfil: AreaMusical): Observable<AreaMusical> {
    if (environment.mock) {
        return of(AreaMusicalMock.getMock());
    }
    else {
        return this.http.put<AreaMusical>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deleteAreaMusicalById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
