
import { MockRandom } from "../utils/mock-random";
import { TipoImagemEnum, TipoImagemEnumMock } from "./enum/tipo-imagem.enum";

export interface Imagem {
    id: number;
    tipo: TipoImagemEnum;  
    is_principal: boolean;
    largura?: number;
    altura?: number;
    nome: string
    descricao?: string;
    foto: File | HTMLImageElement | string;
}

export class ImagemMock {
    static lista: Imagem[];

    public static getMock(): Imagem {
        let quantidade_var = MockRandom.getInteger(1,18)
        return {
            id: MockRandom.getInteger(1, 99),
            tipo: TipoImagemEnumMock.getMock(),  
            is_principal: MockRandom.getBoolean(),
            largura: MockRandom.getFloat(1, 99),
            altura: MockRandom.getFloat(1, 99),
            nome: MockRandom.getName(),
            descricao: MockRandom.getSentence(),
            foto: quantidade_var + '.jpg'
        };
    }

    public static getMockArray(quantidade : number) : Imagem[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ImagemMock.getMock());
          }
        return this.lista;
    }
}
