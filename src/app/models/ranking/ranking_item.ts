import { MockRandom } from "app/utils/mock-random";

export interface RankingItem {
  id:number
  nome: string
  descricao?: string //prode ser apelido tbm
  imagem?: string
  quantidade: number
}


export class RankingItemMock {
  static lista: RankingItem[];

  public static getMock(): RankingItem {
    let quantidade_var = MockRandom.getInteger(1,18)
    return {
        id: MockRandom.getInteger(0, 1000),
        nome: MockRandom.getName(),
        descricao: MockRandom.getSentence(),
        imagem: quantidade_var + '.jpg',
        quantidade: MockRandom.getInteger(0, 100),
      };
  }

  public static getMockArray(quantidade : number) : RankingItem[]{
      this.lista = [];
      for (let i = 0; i < quantidade; i++) {
          this.lista.push(RankingItemMock.getMock());
        }
      return this.lista;
  }

}
