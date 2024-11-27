
import { MockRandom } from "app/utils/mock-random";
import { AreaAtuacaoEnum, AreaAtuacaoEnumMock } from "../enum/area-atuacao.enum";
import { TipoPessoaEnum, TipoPessoaEnumMock } from "../enum/tipo-pessoa.enum";
import { Usuario, UsuarioMock } from "../usuario/usuario";
import { Contato, ContatoMock } from "../colaborador/contato";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";

export interface Parceiro {
    id: string
    tipo_pessoa: TipoPessoaEnum
    documento?: string //cnpj se pessoa juridica e cpf se pessoa fisica
    razao_social?: string
    area_atuacao?: AreaAtuacaoEnum,
    colaborador: Colaborador

    valido?: boolean
}

export class ParceiroMock {
    static lista: Parceiro[];

    public static getMock(): Parceiro {
        let quantidade_var = MockRandom.getInteger(1,18)
        return {
            id: MockRandom.getInteger(1, 100) + '',
            tipo_pessoa: TipoPessoaEnumMock.getMock(),
            documento: MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '-' + MockRandom.getInteger(10, 99),
            razao_social: MockRandom.getUserName(),
            colaborador: ColaboradorMock.getMock(),
            area_atuacao: AreaAtuacaoEnumMock.getMock()
        };
    }

    public static getMockArray(quantidade : number) : Parceiro[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ParceiroMock.getMock());
          }
        return this.lista;
    }
}
