
import { MockRandom } from "app/utils/mock-random";
import { Usuario, UsuarioMock } from "../usuario/usuario";
import { TipoOrigemPerfilEnum, TipoOrigemPerfilEnumMock } from "../enum/tipo-origem-perfil.enum";

export interface NomeLista {
    id: number
    nome: string
    documento: string
    possui_perfil: boolean
    perfil: Usuario
    origem: TipoOrigemPerfilEnum

    valido?: boolean
}

export class NomeListaMock {
    static lista: NomeLista[];

    public static getMock(): NomeLista {
        return {
            id: MockRandom.getInteger(1, 100),
            nome: MockRandom.getName(),
            documento: MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '.' + MockRandom.getInteger(100, 999) + '-' + MockRandom.getInteger(10, 99),
            possui_perfil: MockRandom.getBoolean(),
            perfil: UsuarioMock.getMock(),
            origem: TipoOrigemPerfilEnumMock.getMock(),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : NomeLista[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(NomeListaMock.getMock());
          }
        return this.lista;
    }
}
