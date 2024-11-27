import { MockRandom } from "app/utils/mock-random";
import { TipoItemFaturamentoEnum, TipoItemFaturamentoEnumMock } from "../enum/tipo-item-faturamento.enum";
import { FaturamentoItem, FaturamentoItemMock } from "./faturamento_item";

export interface Faturamento {
  date?: string;
  icon?: string;
  color?: string;

  titulo?: string;       //aqui tbm pode ser o valor total
  valor_total?: number
  quantidade_total?: number   
  descricao?: string;    //no caso do tempo será a data inicio e a final
  mes?: number

  tipo_item?: TipoItemFaturamentoEnum

  itens?: FaturamentoItem[];
  itens_produtos?: FaturamentoItem[];
  itens_ingressos?: FaturamentoItem[];

}

export class FaturamentoMock {
  static lista: Faturamento[];

  public static getMock(): Faturamento {
    let quantidade_var = MockRandom.getInteger(1,18)
    return {
        color: MockRandom.getColor(),
        titulo: MockRandom.getName(),
        valor_total: MockRandom.getFloat(1000, 10000),
        quantidade_total: MockRandom.getInteger(100, 1000),   
        descricao: MockRandom.getSentence(),
        mes: MockRandom.getInteger(1, 12),
        tipo_item: TipoItemFaturamentoEnumMock.getMock(),
        itens: FaturamentoItemMock.getMockArray(10),
        itens_produtos: FaturamentoItemMock.getMockArray(10),
        itens_ingressos: FaturamentoItemMock.getMockArray(10),
    };
  }

  public static getMockArray(quantidade : number) : Faturamento[]{
      this.lista = [];
      for (let i = 0; i < quantidade; i++) {
          this.lista.push(FaturamentoMock.getMock());
        }
      return this.lista;
  }

}
