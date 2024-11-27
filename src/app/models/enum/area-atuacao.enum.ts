export enum AreaAtuacaoEnum {
    show = 'Show',
    balada = 'Balada',
    aniversario15 = 'Aniversário de 15 anos',
    aniversario = 'Aniversário',
    palestra = 'Palestra',
    aula = 'Aula',
    teatro = 'Teatro',
    cinema = 'Cinema',
    standup = 'Standup',
    projeto = 'Projeto',
    fornecedor = 'Fornecedor'
}
  

var randomExt = require("random-ext");
export class AreaAtuacaoEnumMock {
    public static getMock(): AreaAtuacaoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): AreaAtuacaoEnum[] {
        return AreaAtuacaoEnumMock.getLista();
    }

    public static getLista(): AreaAtuacaoEnum[] {
        return [AreaAtuacaoEnum.show, 
            AreaAtuacaoEnum.balada, 
            AreaAtuacaoEnum.aniversario15, 
            AreaAtuacaoEnum.aniversario, 
            AreaAtuacaoEnum.palestra,
            AreaAtuacaoEnum.aula,
            AreaAtuacaoEnum.teatro,
            AreaAtuacaoEnum.cinema,
            AreaAtuacaoEnum.standup,
            AreaAtuacaoEnum.projeto,
            AreaAtuacaoEnum.fornecedor
         ];
    }
                
}
