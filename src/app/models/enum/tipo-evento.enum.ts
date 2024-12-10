export enum TipoEventoEnum {
    show = 'Show',
    balada = 'Balada',
    aniversario15 = 'Debutante',
    aniversario = 'Aniversário',
    palestra = 'Palestra',
    aula = 'Aula',
    teatro = 'Teatro',
    cinema = 'Cinema',
    standup = 'Standup',
    projeto = 'Projeto',
    fornecedor = 'Fornecedor' // ver isso melhor depois


}
  

export class TipoEventoEnumMock {
    public static getMock(): TipoEventoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoEventoEnum[] {
        return TipoEventoEnumMock.getLista();
    }

    public static getLista(): TipoEventoEnum[] {
        return [TipoEventoEnum.show, 
            TipoEventoEnum.balada, 
            TipoEventoEnum.aniversario15, 
            TipoEventoEnum.aniversario, 
            TipoEventoEnum.palestra,
            TipoEventoEnum.aula,
            TipoEventoEnum.teatro,
            TipoEventoEnum.cinema,
            TipoEventoEnum.standup,
            TipoEventoEnum.projeto,
            TipoEventoEnum.fornecedor
         ];
    }
                
}
