
import { MockRandom } from "app/utils/mock-random";
import { Usuario, UsuarioMock } from "../usuario/usuario";
import { NomeLista, NomeListaMock } from "./nome_lista";
import { Cupom, CupomMock } from "./cupom";

export interface ListaDesconto {
    id: number
    nome: string
    usuario_responsavel: Usuario
    nomes_lista: NomeLista[]
    cupons_lista: Cupom[]

    valido?: boolean
}

export class ListaDescontoMock {
    static lista: ListaDesconto[];

    public static getMock(): ListaDesconto {
        return {
            id: MockRandom.getInteger(1, 100),
            nome: MockRandom.getName(),
            usuario_responsavel: UsuarioMock.getMock(),
            nomes_lista: NomeListaMock.getMockArray(MockRandom.getInteger(1, 30)),
            cupons_lista: CupomMock.getMockArray(MockRandom.getInteger(1, 5)),
            valido: MockRandom.getBoolean()
        };
    }

    public static getMockArray(quantidade : number) : ListaDesconto[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ListaDescontoMock.getMock());
          }
        return this.lista;
    }
}
