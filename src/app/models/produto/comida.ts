
import { MockRandom } from "app/utils/mock-random";
import { Produto, ProdutoMock } from "./produto";
import { Restricoes, RestricoesMock } from "./restricoes";

export interface Comida {
    produto: Produto
    g: number
    restricoes: Restricoes
    
    valido?: boolean
}

export class ComidaMock {
    static lista: Comida[];

    public static getMock(): Comida {
        return {
            produto: ProdutoMock.getMock(),
            g: MockRandom.getInteger(1,100),
            restricoes: RestricoesMock.getMock(),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Comida[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ComidaMock.getMock());
          }
        return this.lista;
    }
}
