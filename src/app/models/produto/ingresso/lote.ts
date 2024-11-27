
import { MockRandom } from "app/utils/mock-random";
import { Ingresso, IngressoMock } from "./ingresso";

export interface Lote {
    id: number
    nome: string
    descricao?: string
    quantidade: number
    valor_padrao: number
    inicio?: Date
    fim?: Date
    ingressos: Ingresso[]

    valido?: boolean
}

export class LoteMock {
    static lista: Lote[];

    public static getMock(): Lote {
        return {
            id: MockRandom.getInteger(1, 100),
            nome: MockRandom.getUserName(),
            descricao: MockRandom.getWord(10),
            quantidade: MockRandom.getInteger(1,10),
            valor_padrao: MockRandom.getFloat(1,10),
            inicio: MockRandom.getDatePast(),
            fim: MockRandom.getDateFuture(),
            ingressos: IngressoMock.getMockArray(10),
            valido: MockRandom.getBoolean(),
        };
    }

    public static getMockArray(quantidade : number) : Lote[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(LoteMock.getMock());
          }
        return this.lista;
    }
}
