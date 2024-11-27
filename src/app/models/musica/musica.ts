
import { MockRandom } from "app/utils/mock-random";
import { EstilosMusicaisEnum, EstilosMusicaisEnumMock } from "../enum/estilos-musicais.enum";

export interface Musica {
    id: string;
    link_spotify: string
    link_youtube: string
    nome: string
    estilo_musical: EstilosMusicaisEnum[]
    cantor_dj_banda?: string; /// musico, dj, mc, enfim, o mestre que apresenta a musica em si // no futuro será um usuário
    autor?: string;
    letra?: string;
    
    valido?: boolean
}

export class MusicaMock {
    static lista: Musica[];

    public static getMock(): Musica {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            link_spotify: MockRandom.getLink(),
            link_youtube: MockRandom.getLink(),
            nome: MockRandom.getName(),
            estilo_musical: EstilosMusicaisEnumMock.getMockArray(),
            cantor_dj_banda: MockRandom.getName(),
            autor: MockRandom.getName(),
            letra: MockRandom.getSentence(),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Musica[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(MusicaMock.getMock());
          }
        return this.lista;
    }
}
