
import { MockRandom } from "app/utils/mock-random";
import { Playlist, PlaylistMock } from "./playlist";
import { Musico, MusicoMock } from "./musico";

export interface AreaMusical {
    id: string;
    musicos: Musico[]
    playlists: Playlist[] //feita por cada musico
    valido?: boolean
}

export class AreaMusicalMock {
    static lista: AreaMusical[];

    public static getMock(): AreaMusical {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            musicos: MusicoMock.getMockArray(10),
            playlists: PlaylistMock.getMockArray(10),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : AreaMusical[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(AreaMusicalMock.getMock());
          }
        return this.lista;
    }
}
