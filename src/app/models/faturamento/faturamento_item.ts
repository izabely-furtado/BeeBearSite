import { MockRandom } from "app/utils/mock-random";

export interface FaturamentoItem {
  id:number
  nome: string
  descricao?: string
  imagem?: string
  valor: number ///considerando valor total arrecadado com o item
  //preco: number //considerando o preço por unidade do item
  quantidade: number
}


export class FaturamentoItemMock {
  static lista: FaturamentoItem[];

  public static getMock(): FaturamentoItem {
    let quantidade_var = MockRandom.getInteger(1,18)
    return {
        id: MockRandom.getInteger(0, 1000),
        nome: MockRandom.getName(),
        descricao: MockRandom.getSentence(),
        imagem: quantidade_var + '.jpg',
        valor: MockRandom.getFloat(0, 10000),
        quantidade: MockRandom.getInteger(0, 10000),
      };
  }

  public static getMockArray(quantidade : number) : FaturamentoItem[]{
      this.lista = [];
      for (let i = 0; i < quantidade; i++) {
          this.lista.push(FaturamentoItemMock.getMock());
        }
      return this.lista;
  }

}
