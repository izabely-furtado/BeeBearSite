
import { MockRandom } from "app/utils/mock-random";
import { Produto, ProdutoMock } from "./produto";
import { Evento, EventoMock } from "../evento/evento";
import { TipoOrigemEnum, TipoOrigemEnumMock } from "../enum/tipo-origem.enum";

export interface ProdutoEvento {
    id: number //decidir depois se vai virar number
    produto: Produto
    evento: Evento
    preco: number
    quantidade_total: number
    quantidade_vendida: number
    origem: TipoOrigemEnum
    
    valido?: boolean
}

export class ProdutoEventoMock {
    static lista: ProdutoEvento[];

    public static getMock(): ProdutoEvento {
        let quantidade_var = MockRandom.getInteger(1,100)
        return {
             id: MockRandom.getInteger(1, 100),
             produto: ProdutoMock.getMock(),
             evento: EventoMock.getMock(),
             preco: MockRandom.getFloat(1, 100),
             quantidade_total: quantidade_var,
             quantidade_vendida: quantidade_var - 20,
             origem: TipoOrigemEnumMock.getMock(),
             valido: MockRandom.getBoolean(),
        };
    }

    public static getMockArray(quantidade : number) : ProdutoEvento[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ProdutoEventoMock.getMock());
          }
        return this.lista;
    }
}
