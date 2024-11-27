
import { MockRandom } from "app/utils/mock-random";
import { TipoProdutoEnum, TipoProdutoEnumMock } from "../enum/tipo-produto.enum";
import { TipoOrigemEnum, TipoOrigemEnumMock } from "../enum/tipo-origem.enum";

export interface Produto {
    id: number //decidir depois se vai virar number
    tipo: TipoProdutoEnum
    nome: string
    descricao?: string
    imagem: string
    preco_indicado?: number
    //possui_processo_de_preparo: boolean //refernte a pedido isso entra depois
    // quantidade: number //g se for comida e ml se for bebida e etc... usar as medidas equivalentes
    // medida: TipoMedidaEnum
    
    valido?: boolean
}

export class ProdutoMock {
    static lista: Produto[];

    public static getMock(): Produto {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
             id: MockRandom.getInteger(1, 100),
             tipo: TipoProdutoEnumMock.getMock(),
             nome: MockRandom.getName(),
             descricao: MockRandom.getWord(10),
             imagem: quantidade_var + '.jpg',
             preco_indicado: MockRandom.getFloat(1, 100),
             valido: MockRandom.getBoolean(),
        };
    }

    public static getMockByTipo(tipo: TipoProdutoEnum): Produto {
        let quantidade_var = MockRandom.getInteger(1,18)
        return {
             id: MockRandom.getInteger(1, 100),
             tipo: tipo,
             nome: MockRandom.getName(),
             descricao: MockRandom.getWord(10),
             imagem: quantidade_var + '.jpg',
             preco_indicado: MockRandom.getFloat(1, 100),
             valido: MockRandom.getBoolean(),
        };
    }

    public static getMockArray(quantidade : number) : Produto[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ProdutoMock.getMock());
          }
        return this.lista;
    }

    public static getMockArrayByTipo(quantidade : number, tipo: TipoProdutoEnum) : Produto[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ProdutoMock.getMockByTipo(tipo));
          }
        return this.lista;
    }
}
