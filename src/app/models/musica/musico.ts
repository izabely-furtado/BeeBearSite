
import { MockRandom } from "app/utils/mock-random";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { Time } from "@angular/common";
import { Playlist, PlaylistMock } from "./playlist";

export interface Musico {
    id: string;
    colaborador: Colaborador
    horario_inicio_apresentacao: Date
    horario_fim_apresentacao: Date
    exigencias: string
    playlists: Playlist[]
    
    valido?: boolean
}

export class MusicoMock {
    static lista: Musico[];

    public static getMock(): Musico {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            colaborador: ColaboradorMock.getMock(),
            horario_inicio_apresentacao: MockRandom.getDate(),
            horario_fim_apresentacao: MockRandom.getDate(),
            exigencias: MockRandom.getSentence(),
            playlists: PlaylistMock.getMockArray(10),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Musico[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(MusicoMock.getMock());
          }
        return this.lista;
    }
}
