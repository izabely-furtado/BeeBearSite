
import { MockRandom } from "../../utils/mock-random";

export interface Login {
    username: string
    email: string
    senha: string
    valido?: boolean
}

export class LoginMock {
    static lista: Login[];

    public static getMock(): Login {
        return {
            username: MockRandom.getUserName(),
            email: MockRandom.getEmail(),
            senha: MockRandom.getPassword(10),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : Login[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(LoginMock.getMock());
          }
        return this.lista;
    }
}
