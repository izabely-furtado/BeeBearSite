
import { MockRandom } from "app/utils/mock-random";
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from "./enum/tipo-permissao.enum";
import { PaginaEnum, PaginaEnumMock } from "./enum/pagina.enum";

export interface Permissao {
    id: number
    //nome: string
    //nivel: number  // version 2
    descricao?: string
    paginas?: PaginaEnum[]
    tipo?: TipoPermissaoEnum
    imagem?: string
}

export class PermissaoMock {
    static lista: Permissao[];

    public static getMock(): Permissao {
        let quantidade_var = MockRandom.getInteger(1,18)
        return {
            id: MockRandom.getInteger(1, 100),
            descricao: MockRandom.getSentence(),
            paginas: PaginaEnumMock.getMockArray(),
            tipo: TipoPermissaoEnumMock.getMock(),
            imagem: quantidade_var + '.jpg'
        };
    }

    public static getMockArray(quantidade : number) : Permissao[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PermissaoMock.getMock());
          }
        return this.lista;
    }
}
