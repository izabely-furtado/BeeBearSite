
import { MockRandom } from "app/utils/mock-random";
import { ProdutoMock } from "./produto";
import { SituacaoEstoqueEnum, SituacaoEstoqueEnumMock } from "../enum/situacao-estoque.enum";
import { EstoqueProduto, EstoqueProdutoMock } from "./estoque-produto";

export interface Estoque {
    id: string //decidir depois se vai virar number
    
    //cadastrado
    estoque_produto: EstoqueProduto[]
    situacao: SituacaoEstoqueEnum
    //onde_comprar    esses dois serão numa proxima versão, 
    //onde_recuperar  quando existir mapa do local


    //gerado pelo app:
    quantidade_total: number
    quantidade_vendidos?: number


    valido?: boolean
}

export class EstoqueMock {
    static lista: Estoque[];

    public static getMock(): Estoque {
        return {
             id: MockRandom.getInteger(1, 100) + '',
             estoque_produto: EstoqueProdutoMock.getMockArray(30),
             quantidade_total: MockRandom.getInteger(1, 100),
             quantidade_vendidos: MockRandom.getInteger(1, 100),
             situacao: SituacaoEstoqueEnumMock.getMock(),
             valido: MockRandom.getBoolean(),
        };
    }

    public static getMockArray(quantidade : number) : Estoque[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EstoqueMock.getMock());
          }
        return this.lista;
    }
}
