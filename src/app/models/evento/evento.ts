
import { MockRandom } from "app/utils/mock-random";
import { Imagem, ImagemMock } from "../imagem";
import { Colaborador, ColaboradorMock } from "../colaborador/colaborador";
import { Produto, ProdutoMock } from "../produto/produto";
import { Endereco, EnderecoMock } from "../endereco/endereco";
import { Lote, LoteMock } from "../produto/ingresso/lote";
import { Parceiro, ParceiroMock } from "../empresa/parceiro";
import { Usuario, UsuarioMock } from "../usuario/usuario";
import { TipoEventoEnum, TipoEventoEnumMock } from "../enum/tipo-evento.enum";
import { Regra, RegraMock } from "../regra";
import { AreaMusical, AreaMusicalMock } from "../musica/area-musical";
import { StatusEventoEnum, StatusEventoEnumMock } from "../enum/status-evento.enum";

export interface Evento {
    id: string //decidir depois se vai virar number
    //dados cadastrados
    nome: string
    descricao?: string
    tipo: TipoEventoEnum
    endereco: Endereco
    data_inicio: Date
    data_fim: Date
    faixa_etaria: string
    regras?: Regra[]
    lotes: Lote[]
    colaboradores: Colaborador[]
    produtos: Produto[]
    vender_produtos_apos_evento: boolean // version 2
    imagens?: Imagem[]
    imagem_principal?: string //decidir se fica depois
    parceiros: Parceiro[]
    area_musical?: AreaMusical

    //dados gerados
    curtidas: number
    quantidade_interessados: number
    usuarios_interessados: Usuario[]
    quantidade_comprada: number
    usuarios_que_compraram: Usuario[]
    status: StatusEventoEnum

    valido?: boolean
}

export class EventoMock {
    static lista: Evento[];

    public static getMock(): Evento {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
            id: MockRandom.getInteger(1, 100) + '',
            nome: MockRandom.getName(),
            descricao: MockRandom.getSentence(),
            tipo: TipoEventoEnumMock.getMock(),
            endereco: EnderecoMock.getMock(), 
            data_inicio: MockRandom.getDatePast(),
            data_fim: MockRandom.getDateFuture(),
            faixa_etaria: MockRandom.getFaixaEtaria(),
            regras: RegraMock.getMockArray(10),
            lotes: LoteMock.getMockArray(10),
            colaboradores: ColaboradorMock.getMockArray(10),
            produtos: ProdutoMock.getMockArray(10),
            vender_produtos_apos_evento: MockRandom.getBoolean(),
            imagens: ImagemMock.getMockArray(10),
            imagem_principal: quantidade_var + '.jpg',
            parceiros: ParceiroMock.getMockArray(10),
            curtidas: MockRandom.getInteger(1,10),
            quantidade_interessados: MockRandom.getInteger(1,10),
            usuarios_interessados: UsuarioMock.getMockArray(10),
            quantidade_comprada: MockRandom.getInteger(1,10),
            usuarios_que_compraram: UsuarioMock.getMockArray(10),
            area_musical: AreaMusicalMock.getMock(),
            status: StatusEventoEnumMock.getLista()[MockRandom.getInteger(1,4)],
            valido: MockRandom.getBoolean(),
        };
    }

    public static getMockByTipo(tipo: TipoEventoEnum): Evento {
        let quantidade_var = MockRandom.getInteger(1,10)
        return {
            id: MockRandom.getInteger(1, 100) + '',
            nome: MockRandom.getName(),
            descricao: MockRandom.getSentence(),
            tipo: tipo,
            endereco: EnderecoMock.getMock(),
            data_inicio: MockRandom.getDatePast(),
            data_fim: MockRandom.getDateFuture(),
            faixa_etaria: MockRandom.getFaixaEtaria(),
            lotes: LoteMock.getMockArray(10),
            colaboradores: ColaboradorMock.getMockArray(10),
            produtos: ProdutoMock.getMockArray(10),
            vender_produtos_apos_evento: MockRandom.getBoolean(),
            imagens: ImagemMock.getMockArray(10),
            imagem_principal: quantidade_var + '.jpg',
            parceiros: ParceiroMock.getMockArray(10),
            curtidas: MockRandom.getInteger(1,10),
            quantidade_interessados: MockRandom.getInteger(1,10),
            usuarios_interessados: UsuarioMock.getMockArray(10),
            quantidade_comprada: MockRandom.getInteger(1,10),
            usuarios_que_compraram: UsuarioMock.getMockArray(10),
            area_musical: AreaMusicalMock.getMock(),
            status: StatusEventoEnumMock.getLista()[MockRandom.getInteger(1,5)],
            valido: MockRandom.getBoolean(),
        };
    }

    public static getMockArray(quantidade : number) : Evento[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EventoMock.getMock());
          }
        return this.lista;
    }

    public static getMockArrayByTipo(quantidade : number, tipo: TipoEventoEnum) : Evento[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EventoMock.getMockByTipo(tipo));
          }
        return this.lista;
    }
}
