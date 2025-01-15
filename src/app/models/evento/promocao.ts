
import { MockRandom } from "app/utils/mock-random";

export interface Promocao {
    id: string 
    nome: string
    descricao?: string
    valor?: number
    ativo?: boolean
    imagem_principal?: string 
}

export class PromocaoMock {
    static lista: Promocao[];

    public static getMock(): Promocao {
        let quantidade_var = MockRandom.getInteger(1,22)
        return {
            id: MockRandom.getInteger(1, 100) + '',
            nome: MockRandom.getName(),
            descricao: MockRandom.getSentence(),
            valor: MockRandom.getFloat(1, 100),
            ativo: MockRandom.getBoolean(),
            imagem_principal: quantidade_var + '.jpg',
        };
    }

    public static getMockArray(quantidade : number) : Promocao[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PromocaoMock.getMock());
          }
        return this.lista;
    }
}
