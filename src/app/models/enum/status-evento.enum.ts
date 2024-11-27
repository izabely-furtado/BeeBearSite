export enum StatusEventoEnum {
    iniciou_cadastro = 'Cadastro Iniciado', //se a pessoa começou a cadastrar
    iniciou_vendas = 'Vendas Iniciadas', //após já existirem informações suficientes para iniciar vendas e setou pra iniciar
    iniciou_evento = 'Evento Iniciado', //se iniciou o evento
    finalizado = 'Finalizado', //se finalizou o evento
    cancelado = 'Cancelado', //se cancelou após já terem iniciado as vendas
}
  

export class StatusEventoEnumMock {
    public static getMock(): StatusEventoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): StatusEventoEnum[] {
        return StatusEventoEnumMock.getLista();
    }

    public static getLista(): StatusEventoEnum[] {
        return [StatusEventoEnum.iniciou_cadastro, 
            StatusEventoEnum.iniciou_vendas, 
            StatusEventoEnum.iniciou_evento, 
            StatusEventoEnum.finalizado, 
            StatusEventoEnum.cancelado
         ];
    }

    public static getSeverity(status: StatusEventoEnum): string {
        switch (status) {
            case StatusEventoEnum.iniciou_cadastro: 
                return 'info';
            case StatusEventoEnum.iniciou_vendas: 
                return 'success';
            case StatusEventoEnum.iniciou_evento: 
                return 'warning';
            case StatusEventoEnum.finalizado: 
                return 'help';
            default: 
                return 'danger';
        }
    }

    public static getDefinicao(status: StatusEventoEnum): string {
        switch (status) {
            case StatusEventoEnum.iniciou_cadastro: 
                return 'O cadastro foi iniciado';
            case StatusEventoEnum.iniciou_vendas: 
                return 'As vendas dos produtos e ingressos foram liberadas';
            case StatusEventoEnum.iniciou_evento: 
                return 'O evento iniciou';
            case StatusEventoEnum.finalizado: 
                return 'O evento foi finalizado';
            default: 
                return 'O evento foi cancelado';
        }
    }
                
}
