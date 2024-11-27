
import { MockRandom } from "app/utils/mock-random";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { AreaAtuacaoEnum, AreaAtuacaoEnumMock } from "../enum/area-atuacao.enum";
import { SituacaoEnum, SituacaoEnumMock } from "../enum/situacao.enum";
import { IdentidadeVisual, IdentidadeVisualMock } from "./identidade-visual";
import { Endereco, EnderecoMock } from "../endereco/endereco";
import { Parceiro } from "./parceiro";
import { Contato, ContatoMock } from "../colaborador/contato";

export interface Empresa {
    id: number
    razao_social: string
    cnpj?: string
    cnae?: string
    nome_fantasia?: string
    fundado_em?: Date
    area_atuacao?: AreaAtuacaoEnum
    vende_alcool: boolean
    //licenca_venda_alcool?: File | HTMLImageElement | string //deixou de se necessitar da licença, mas o cnae deve ser correpondente do ramo alimenticio 5611, 5612, 5620 ou 47211
    identidade_visual?: IdentidadeVisual
    contato: Contato
    missao?: string
    visao?: string
    valores?: string
    funcionarios?: Colaborador[]
    enderecos?: Endereco[]
    parceiros?: Parceiro[]
    
    
    valido?: boolean
}

export class EmpresaMock {
    static lista: Empresa[];

    public static getMock(): Empresa {
        return {
            id: MockRandom.getInteger(1, 100),
            razao_social: MockRandom.getUserName(),
            cnpj: MockRandom.getInteger(1, 1000000) + '',
            cnae: MockRandom.getInteger(1, 10000) + '',
            nome_fantasia: MockRandom.getUserName(),
            fundado_em: MockRandom.getDatePast(),
            area_atuacao: AreaAtuacaoEnumMock.getMock(),
            vende_alcool: MockRandom.getBoolean(),
            identidade_visual: IdentidadeVisualMock.getMock(),
            contato: ContatoMock.getMock(),
            missao: MockRandom.getSentence(),
            visao: MockRandom.getSentence(),
            valores: MockRandom.getSentence(),
            funcionarios: ColaboradorMock.getMockArray(10),
            enderecos: EnderecoMock.getMockArray(3),
            valido: MockRandom.getBoolean(),
        };
    }

    public static getMockBySituacao(situacao: SituacaoEnum): Empresa {
        return {
            id: MockRandom.getInteger(1, 100),
            razao_social: MockRandom.getUserName(),
            cnpj: MockRandom.getInteger(1, 1000000) + '',
            cnae: MockRandom.getInteger(1, 10000) + '',
            nome_fantasia: MockRandom.getUserName(),
            fundado_em: MockRandom.getDatePast(),
            area_atuacao: AreaAtuacaoEnumMock.getMock(),
            vende_alcool: MockRandom.getBoolean(),
            identidade_visual: IdentidadeVisualMock.getMock(),
            contato: ContatoMock.getMock(),
            missao: MockRandom.getSentence(),
            visao: MockRandom.getSentence(),
            valores: MockRandom.getSentence(),
            funcionarios: ColaboradorMock.getMockArray(10),
            enderecos: EnderecoMock.getMockArray(3),
            valido: MockRandom.getBoolean(),
        };
    }

    public static getMockByArea(area: AreaAtuacaoEnum): Empresa {
        return {
            id: MockRandom.getInteger(1, 100),
            razao_social: MockRandom.getUserName(),
            cnpj: MockRandom.getInteger(1, 1000000) + '',
            cnae: MockRandom.getInteger(1, 10000) + '',
            nome_fantasia: MockRandom.getUserName(),
            fundado_em: MockRandom.getDatePast(),
            area_atuacao: area,
            vende_alcool: MockRandom.getBoolean(),
            identidade_visual: IdentidadeVisualMock.getMock(),
            contato: ContatoMock.getMock(),
            missao: MockRandom.getSentence(),
            visao: MockRandom.getSentence(),
            valores: MockRandom.getSentence(),
            funcionarios: ColaboradorMock.getMockArray(10),
            enderecos: EnderecoMock.getMockArray(3),
            valido: MockRandom.getBoolean(),
        };
    }

    public static getMockArray(quantidade : number) : Empresa[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EmpresaMock.getMock());
          }
        return this.lista;
    }

    public static getMockArrayByArea(quantidade : number, area: AreaAtuacaoEnum) : Empresa[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EmpresaMock.getMockByArea(area));
          }
        return this.lista;
    }

    public static getMockArrayBySituacao(quantidade : number, situacao: SituacaoEnum) : Empresa[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EmpresaMock.getMockBySituacao(situacao));
          }
        return this.lista;
    }

    
}
