
import { MockRandom } from "../utils/mock-random";
import { TipoOrigemEnum, TipoOrigemEnumMock } from "./enum/tipo-origem.enum";

export interface Regra {
    id: number;
    nome: string
    descricao?: string;
    origem?: TipoOrigemEnum
}

export class RegraMock {
    static lista: Regra[];

    public static getMock(): Regra {
        return {
            id: MockRandom.getInteger(1, 99),
            nome: MockRandom.getName(),
            descricao: MockRandom.getSentence(),
            origem: TipoOrigemEnumMock.getMock()
        };
    }

    public static getMockArray(quantidade : number) : Regra[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(RegraMock.getMock());
          }
        return this.lista;
    }
}
