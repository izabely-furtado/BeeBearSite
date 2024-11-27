
import { MockRandom } from "app/utils/mock-random";
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from "../enum/tipo-permissao.enum";
import { Usuario, UsuarioMock } from "../usuario/usuario";
import { Contato, ContatoMock } from "./contato";
import { TipoOrigemEnum, TipoOrigemEnumMock } from "../enum/tipo-origem.enum";

export interface Colaborador {
    id: string;
    usuario: Usuario
    valido?: boolean
    pix?: string
    origem?: TipoOrigemEnum //sempre a origem será da empresa por enquanto
}

export class ColaboradorMock {
    static lista: Colaborador[];
 
    public static getMock(): Colaborador {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            usuario: UsuarioMock.getMock(),
            valido: MockRandom.getBoolean(),
            origem: TipoOrigemEnumMock.getMock(),
        };
    }

    public static getMockArray(quantidade : number) : Colaborador[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ColaboradorMock.getMock());
          }
        return this.lista;
    }
}
