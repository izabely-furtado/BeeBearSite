
import { MockRandom } from "app/utils/mock-random";
import { PlanoContratado, PlanoContratadoMock } from "./plano-contratado";
import { SemanalMensalAnualEnum, SemanalMensalAnualEnumMock } from "../enum/semanal_mensal_anual";
import { Empresa, EmpresaMock } from "./empresa";

export interface Cliente {
    id: number
    empresa: Empresa
    plano_contratado: PlanoContratado 
    tipo_de_contratacao: SemanalMensalAnualEnum
    data_proximo_pagamento: Date
    valor_contratado: number
    possui_pendencia: boolean
    
    valido?: boolean
}

export class ClienteMock {
    static lista: Cliente[];

    public static getMock(): Cliente {
        return {
            id: MockRandom.getInteger(1, 100),
            empresa: EmpresaMock.getMock(),
            plano_contratado: PlanoContratadoMock.getMock(),
            tipo_de_contratacao: SemanalMensalAnualEnumMock.getMock(),
            data_proximo_pagamento: MockRandom.getDateFuture(),
            valor_contratado: MockRandom.getFloat(100, 1000),
            possui_pendencia: MockRandom.getBoolean(),
            valido: MockRandom.getBoolean(),
        };
    }

    

    public static getMockArray(quantidade : number) : Cliente[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(ClienteMock.getMock());
          }
        return this.lista;
    }

    
}
