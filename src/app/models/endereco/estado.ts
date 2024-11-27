import { MockRandom } from "app/utils/mock-random";

export interface Estado {
    sigla:  string;
    nome: string;
    cidades?: string[]
}

export class EstadoClass implements Estado {
    sigla:  string;
    nome: string;
    cidades?: string[]

    constructor(sigla: string, nome: string, cidades?: string[]) {
        this.sigla = sigla;
        this.nome = nome;
        this.cidades = cidades;
    }
}

export class EstadoMock {
    static lista: Estado[];

    public static getMock(): Estado {
        return {
            sigla:  MockRandom.getLetter() + MockRandom.getLetter(),
            nome: MockRandom.getString(),
            cidades: []
        };
    }

    public static getMockArray(quantidade : number) : Estado[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(EstadoMock.getMock());
          }
        return this.lista;
    }
}
