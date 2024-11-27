
import { MockRandom } from "app/utils/mock-random";
import { Produto, ProdutoMock } from "./produto";

export interface Brinde {
    produto: Produto
    e_gratis: boolean
    como_conseguir: string
    
    valido?: boolean
}

export class BrindeMock {
    static lista: Brinde[];

    public static getMock(): Brinde {
        return {
            produto: ProdutoMock.getMock(),
            e_gratis: MockRandom.getBoolean(),
            como_conseguir: MockRandom.getSentence(),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Brinde[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(BrindeMock.getMock());
          }
        return this.lista;
    }
}
