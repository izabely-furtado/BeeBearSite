import { MockRandom } from "app/utils/mock-random";

export interface Erro {
    erro: string
}

export class ErroClass implements Erro {
    erro: string;

    constructor(erro: string) {
        this.erro = erro;
    }
}

export class ErroMock {
    static lista: Erro[];
    
    public static getMock(): Erro {
        return {
            erro:  MockRandom.getString()
        };
    }

    public static getMockArray(quantidade : number) : Erro[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ErroMock.getMock());
          }
        return this.lista;
    }
}
