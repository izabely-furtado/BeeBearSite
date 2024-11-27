
import { MockRandom } from "app/utils/mock-random";
import { Login, LoginMock } from "./login";
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from "../enum/tipo-permissao.enum";
import { Contato, ContatoMock } from "../colaborador/contato";

export interface Usuario {
    id: string;
    login: Login
    nome: string
    apelido?: string
    cpf: string
    nascimento: Date
    imagem: string
    contato: Contato
    permissoes: TipoPermissaoEnum[]
    permissoes_evento?: TipoPermissaoEnum[]
}

export class UsuarioMock {
    static lista: Usuario[];

    public static getMock(): Usuario {
        let quantidade_var = MockRandom.getInteger(1,18)
        return {
            id: MockRandom.getInteger(1, 100) + '',
            login: LoginMock.getMock(),
            nome: MockRandom.getName(),
            apelido: MockRandom.getUserName(),
            cpf: MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '-' + MockRandom.getInteger(10, 99),
            nascimento: MockRandom.getDatePast(),
            imagem: quantidade_var + '.jpg',
            contato: ContatoMock.getMock(),
            permissoes: TipoPermissaoEnumMock.getListaParcial(),
            permissoes_evento: TipoPermissaoEnumMock.getListaParcial(),
        };
    }

    public static getMockArray(quantidade : number) : Usuario[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(UsuarioMock.getMock());
          }
        return this.lista;
    }
}
