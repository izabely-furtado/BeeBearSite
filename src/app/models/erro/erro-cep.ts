import { MockRandom } from "../../utils/mock-random";
import { Error, ErrorMock } from "./error";

export interface ErroCEP {
    name: string
    message: string
    type?: string
    errors: Error[]
}

export class ErroCEPClass implements ErroCEP {
    name: string
    message: string
    type?: string
    errors: Error[]

    constructor(name: string, message: string, errors: Error[]) {
        this.name = name;
        this.message = message;
        this.errors = errors
    }
}

export class ErroCEPMock {
    static lista: ErroCEP[];
    
    public static getMock(): ErroCEP {
        return {
            name: MockRandom.getString(),
            message: MockRandom.getString(),
            type: MockRandom.getString(),
            errors: ErrorMock.getMockArray(10)
        };
    }

    public static getMockArray(quantidade : number) : ErroCEP[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ErroCEPMock.getMock());
          }
        return this.lista;
    }
}
