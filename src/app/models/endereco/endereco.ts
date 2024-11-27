import { EstadoService } from "app/utils/estado.list";
import { MockRandom } from "app/utils/mock-random";
import { TipoOrigemEnum, TipoOrigemEnumMock } from "../enum/tipo-origem.enum";

export interface Endereco {
    id?: string,
    nome?: string,
    cep: string,
    state: string,
    city: string,
    street: string,
    neighborhood: string,
    service?: string
    numero?: number
    complemento?: string
    e_principal?: boolean
    link_maps?: string
    origem?: TipoOrigemEnum
    //mapa do local numa proxima versao
    valido?: boolean
}

export class EnderecoClass implements Endereco {
    
    cep:  string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;

    constructor(cep:  string, state: string, city: string, street: string, neighborhood: string) {
        this.cep = cep;
        this.state = state;
        this.city = city;
        this.street = street;
        this.neighborhood = neighborhood;
    }
}

export class EnderecoMock {
    static lista: Endereco[];

    public static getMock(): Endereco {
        return {
            id: MockRandom.getInteger(1,9999) + '',
            nome: MockRandom.getName(),
            cep:  MockRandom.getInteger(10, 99) + '.' + MockRandom.getInteger(100, 999) + '-' + MockRandom.getInteger(100, 999),
            numero: MockRandom.getInteger(1, 999),
            state: EstadoService.getMock().nome,
            city: MockRandom.getName(),
            street: MockRandom.getName(),
            e_principal: MockRandom.getBoolean(),
            neighborhood: MockRandom.getName(),
            origem: TipoOrigemEnumMock.getMock()
        };
    }

    public static getMockArray(quantidade : number) : Endereco[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EnderecoMock.getMock());
          }
        return this.lista;
    }
}
