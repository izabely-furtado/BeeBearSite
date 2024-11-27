import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { Playlist, PlaylistMock } from 'app/models/musica/playlist';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  url = environment.apiUrl + '/area_musical/playlist';

  constructor(private http: HttpClient) {}

  // Retorna todos
  getAllPlaylists(): Observable<Playlist[]> {
    if (environment.mock) {
        return of(PlaylistMock.getMockArray(20));
    }
    else {
        return this.http.get<Playlist[]>(this.url);
    }
  }

  // Retorna todos
  getAllPlaylistEvento(idEvento: number): Observable<Playlist[]> {
    if (environment.mock) {
        return of(PlaylistMock.getMockArray(20));
    }
    else {
        return this.http.get<Playlist[]>(`${this.url}/evento/${idEvento}`);
    }
  }

  // Retorna um pelo ID
  getPlaylistById(id: number): Observable<Playlist> {
    if (environment.mock) {
        return of(PlaylistMock.getMock());
    }
    else {
        return this.http.get<Playlist>(`${this.url}/${id}`);
    }
  }

  // Adiciona um novo
  addPlaylist(perfil: Playlist): Observable<Playlist> {
    if (environment.mock) {
        return of(PlaylistMock.getMock());
    }
    else {
        return this.http.post<Playlist>(this.url, perfil);
    }
  }

  // Atualiza um existente
  updatePlaylist(perfil: Playlist): Observable<Playlist> {
    if (environment.mock) {
        return of(PlaylistMock.getMock());
    }
    else {
        return this.http.put<Playlist>(`${this.url}/${perfil.id}`, perfil);
    }
  }

  // Remove um pelo ID
  deletePlaylistById(id: number): Observable<void> {
    if (environment.mock) {
        return of();
    }
    else {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
  }

}
