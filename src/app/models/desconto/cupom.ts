
import { MockRandom } from "app/utils/mock-random";
import { Desconto, DescontoMock } from "./desconto";
import { TipoOrigemEnum, TipoOrigemEnumMock } from "../enum/tipo-origem.enum";

export interface Cupom {
    id: number
    codigo: string
    desconto: Desconto
    validade: Date
    valor_minimo_gasto: number
    //listas_vinculadas: 
    //regras: Regra[] //colocar isso no futuro
    origem?: TipoOrigemEnum
    valido?: boolean
}

export class CupomMock {
    static lista: Cupom[];

    public static getMock(): Cupom {
        return {
            id: MockRandom.getInteger(1, 100),
            codigo: MockRandom.getInteger(1, 100) + MockRandom.getName().toUpperCase(),
            desconto: DescontoMock.getMock(),
            validade: MockRandom.getDateFuture(),
            valido: MockRandom.getBoolean(),
            origem: TipoOrigemEnumMock.getMock(),
            valor_minimo_gasto: MockRandom.getInteger(10,1000)
        };
    }

    public static getMockArray(quantidade : number) : Cupom[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(CupomMock.getMock());
          }
        return this.lista;
    }
}
