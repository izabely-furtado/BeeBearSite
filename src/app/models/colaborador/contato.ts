
import { MockRandom } from "app/utils/mock-random";
import { TipoOrigemEnum, TipoOrigemEnumMock } from "../enum/tipo-origem.enum";

export interface Contato {
    id: string;
    telefone?: string
    whatsapp?: string;
    instagram?: string
    linkedin?: string
    email?: string
    tiktok?: string
    youtube?: string
    origem?: TipoOrigemEnum
}

export class ContatoMock {
    static lista: Contato[];

    public static getMock(): Contato {
        return {
            id: MockRandom.getInteger(1, 100) + '',
            telefone: '(' + MockRandom.getInteger(10, 99) + ')' + MockRandom.getInteger(100000000, 999999999),
            whatsapp: '(' + MockRandom.getInteger(10, 99) + ')' + MockRandom.getInteger(100000000, 999999999),
            instagram: '@' + MockRandom.getUserName(),
            youtube: '@' + MockRandom.getUserName(),
            linkedin: MockRandom.getString(),
            email:  MockRandom.getEmail(),
            tiktok: '@' + MockRandom.getUserName(),
            origem: TipoOrigemEnumMock.getMock()
        };
    }

    public static getMockArray(quantidade : number) : Contato[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ContatoMock.getMock());
          }
        return this.lista;
    }
}
