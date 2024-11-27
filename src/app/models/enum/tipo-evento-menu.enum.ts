export enum TipoEventoMenuEnum {
    com_pendencias = 'Com Pendências',
    ocorrendo_hoje = 'Ocorrendo Hoje',
    mais_acessados = 'Mais Acessados',
    iniciados = 'Iniciados',
    finalizados = 'Finalizados',
    cancelados = 'Cancelados',
}
  

export class TipoEventoMenuEnumMock {
    public static getMock(): TipoEventoMenuEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoEventoMenuEnum[] {
        return TipoEventoMenuEnumMock.getLista();
    }

    public static getLista(): TipoEventoMenuEnum[] {
        return [TipoEventoMenuEnum.com_pendencias, 
            TipoEventoMenuEnum.ocorrendo_hoje, 
            TipoEventoMenuEnum.mais_acessados, 
            TipoEventoMenuEnum.iniciados, 
            TipoEventoMenuEnum.finalizados,
            TipoEventoMenuEnum.cancelados
        ]
    }
                
}
