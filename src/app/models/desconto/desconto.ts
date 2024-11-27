
import { MockRandom } from "app/utils/mock-random";
import { TipoDescontoEnum, TipoDescontoEnumMock } from "../enum/tipo-desconto.enum";

export interface Desconto {
    tipo: TipoDescontoEnum
    valor?: number

    valido?: boolean
}

export class DescontoMock {
    static lista: Desconto[];

    public static getMock(): Desconto {
        return {
            tipo: TipoDescontoEnumMock.getMock(),
            valor: MockRandom.getFloat(0.1, 100),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Desconto[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(DescontoMock.getMock());
          }
        return this.lista;
    }
}
