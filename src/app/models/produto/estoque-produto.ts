
import { MockRandom } from "app/utils/mock-random";
import { Imagem, ImagemMock } from "../imagem";
import { Produto, ProdutoMock } from "./produto";
import { SituacaoEstoqueEnum, SituacaoEstoqueEnumMock } from "../enum/situacao-estoque.enum";

export interface EstoqueProduto {
    id: string //decidir depois se vai virar number
    
    //cadastrado
    produto: Produto
    quantidade: number
    preco: number
    situacao: SituacaoEstoqueEnum
    //onde_comprar    esses dois serão numa proxima versão, 
    //onde_recuperar  quando existir mapa do local


    //gerado pelo app:
    quantidade_vendidos?: number

    valido?: boolean
}

export class EstoqueProdutoMock {
    static lista: EstoqueProduto[];

    public static getMock(): EstoqueProduto {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
             id: MockRandom.getInteger(1, 100) + '',
             produto: ProdutoMock.getMock(),
             quantidade: MockRandom.getInteger(1, 100),
             preco: MockRandom.getFloat(1, 100),
             situacao: SituacaoEstoqueEnumMock.getMock(),
             valido: MockRandom.getBoolean(),
             quantidade_vendidos: 100 - quantidade_var
        };
    }

    public static getMockArray(quantidade : number) : EstoqueProduto[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EstoqueProdutoMock.getMock());
          }
        return this.lista;
    }
}
