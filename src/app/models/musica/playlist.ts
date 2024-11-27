
import { MockRandom } from "app/utils/mock-random";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { Musica, MusicaMock } from "./musica";
import { EstilosMusicaisEnum, EstilosMusicaisEnumMock } from "../enum/estilos-musicais.enum";

export interface Playlist {
    id: number;
    nome: string;
    link_spotify: string    //a pessoa pode decidir se insere a playlist por completo ou insere cada musica
    link_youtube: string
    criado_por: Colaborador
    estilo_musical: EstilosMusicaisEnum[]
    musicas: Musica[]
    imagem?: string

    valido?: boolean
}

export class PlaylistMock {
    static lista: Playlist[];

    public static getMock(): Playlist {
        let quantidade_var = MockRandom.getInteger(1,18)
        return {
            id: MockRandom.getInteger(1, 100),
            nome: MockRandom.getName(),
            link_spotify: MockRandom.getLink(),
            link_youtube: MockRandom.getLink(),
            criado_por: ColaboradorMock.getMock(),
            estilo_musical: EstilosMusicaisEnumMock.getMockArray(),
            musicas: MusicaMock.getMockArray(10),
            imagem: quantidade_var + '.jpg',
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Playlist[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PlaylistMock.getMock());
          }
        return this.lista;
    }

    public static getMockByTipo(tipo: EstilosMusicaisEnum): Playlist {
        let quantidade_var = MockRandom.getInteger(1,18)
        return {
            id: MockRandom.getInteger(1, 100),
            nome: MockRandom.getName(),
            estilo_musical: [tipo],
            link_spotify: MockRandom.getLink(),
            link_youtube: MockRandom.getLink(),
            criado_por: ColaboradorMock.getMock(),
            musicas: MusicaMock.getMockArray(10),
            imagem: quantidade_var + '.jpg',
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArrayByTipo(quantidade : number, tipo: EstilosMusicaisEnum) : Playlist[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PlaylistMock.getMockByTipo(tipo));
          }
        return this.lista;
    }
}
