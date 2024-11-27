
import { MockRandom } from "app/utils/mock-random";
import { Produto, ProdutoMock } from "./produto";
import { Restricoes, RestricoesMock } from "./restricoes";

export interface Bebida {
    produto: Produto
    ml: number
    e_alcoolico: boolean
    teor_alcoolico: number
    restricoes: Restricoes
    
    valido?: boolean
}

export class BebidaMock {
    static lista: Bebida[];

    public static getMock(): Bebida {
        return {
            produto: ProdutoMock.getMock(),
            ml: MockRandom.getInteger(1,100),
            e_alcoolico: MockRandom.getBoolean(),
            teor_alcoolico: MockRandom.getFloat(0.1, 100),
            restricoes: RestricoesMock.getMock(),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Bebida[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(BebidaMock.getMock());
          }
        return this.lista;
    }
}
