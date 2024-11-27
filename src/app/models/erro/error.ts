import { MockRandom } from "app/utils/mock-random";

export interface Error {
    message: string
    service?: string
}

export class ErrorClass implements Error {
    message: string
    service?: string

    constructor(message: string, service?: string) {
        this.message = message
        this.service = service
    }
}

export class ErrorMock {
    static lista: Error[];
    
    public static getMock(): Error {
        return {
            message:  MockRandom.getString()
        };
    }

    public static getMockArray(quantidade : number) : Error[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ErrorMock.getMock());
          }
        return this.lista;
    }
}
