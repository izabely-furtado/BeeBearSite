
import { EnderecoService } from "app/services/endereco.service";
import { MockRandom } from "../utils/mock-random";
import { Parceiro, ParceiroMock } from "./empresa/parceiro";
import { Estado } from "./endereco/estado";
import { TipoEventoEnum, TipoEventoEnumMock } from "./enum/tipo-evento.enum";
import { EnderecoUtil } from "app/utils/endereco.util";
import { EstadoService } from "app/utils/estado.list";

export interface Pesquisa {
    nome: string;
    estados: Estado[]
    cidade: string
    data_inicial: Date
    data_final: Date
    preco_minimo: number
    preco_maximo: number
    faixa_etaria: string
    tipo_evento: TipoEventoEnum
    parceiro: Parceiro
}

export class PesquisaMock {
    static lista: Pesquisa[];

    public static getMock(): Pesquisa {
        return {
            nome: MockRandom.getName(),
            estados: EstadoService.estados,
            cidade: MockRandom.getName(),
            data_inicial: MockRandom.getDatePast(),
            data_final: MockRandom.getDateFuture(),
            preco_minimo: MockRandom.getFloat(1, 10),
            preco_maximo: MockRandom.getFloat(10, 100),
            faixa_etaria: MockRandom.getFaixaEtaria(),
            tipo_evento: TipoEventoEnumMock.getMock(),
            parceiro: ParceiroMock.getMock()
        };
    }

    public static getMockArray(quantidade : number) : Pesquisa[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PesquisaMock.getMock());
          }
        return this.lista;
    }
}
