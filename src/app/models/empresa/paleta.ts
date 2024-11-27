
import { MockRandom } from "app/utils/mock-random";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { AreaAtuacaoEnum, AreaAtuacaoEnumMock } from "../enum/area-atuacao.enum";
import { SituacaoEnum, SituacaoEnumMock } from "../enum/situacao.enum";
import { Imagem } from "../imagem";

export interface Paleta {
    id: number
    cor_principal: string
    cor_secundaria: string
    cor_texto: string
    cor_background: string
    cor_realce: string
}

export class PaletaMock {
    static lista: Paleta[];

    public static getMock(): Paleta {
        return {
            id: MockRandom.getInteger(1, 100),
            cor_principal: MockRandom.getColor(),
            cor_secundaria: MockRandom.getColor(),
            cor_texto: MockRandom.getColor(),
            cor_background: MockRandom.getColor(),
            cor_realce: MockRandom.getColor()
        };
    }

    public static getMockArray(quantidade : number) : Paleta[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PaletaMock.getMock());
          }
        return this.lista;
    }
}
