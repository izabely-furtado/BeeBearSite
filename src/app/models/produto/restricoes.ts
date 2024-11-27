
import { MockRandom } from "app/utils/mock-random";

export interface Restricoes {
    e_apimentado: boolean
    e_vegano: boolean
    possui_lactose: boolean
    possui_açucar: boolean
    possui_glutem: boolean
}

export class RestricoesMock {
    static lista: Restricoes[];

    public static getMock(): Restricoes {
        return {
            e_apimentado: MockRandom.getBoolean(),
            e_vegano: MockRandom.getBoolean(),
            possui_lactose: MockRandom.getBoolean(),
            possui_açucar: MockRandom.getBoolean(),
            possui_glutem: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Restricoes[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(RestricoesMock.getMock());
          }
        return this.lista;
    }
}
