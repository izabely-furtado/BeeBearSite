export enum SituacaoEnum {
    nao_iniciado = 'Não Iniciado',
    em_analise = 'Em análise',
    processando = 'Processando',
    pendente = 'Pendente',
    aprovado = 'Aprovado',
    reprovado = 'Reprovado'
}
  

var randomExt = require("random-ext");
export class SituacaoEnumMock {
    public static getMock(): SituacaoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): SituacaoEnum[] {
        return SituacaoEnumMock.getLista();
    }

    public static getLista(): SituacaoEnum[] {
        return [SituacaoEnum.nao_iniciado,
            SituacaoEnum.em_analise, 
            SituacaoEnum.processando, 
            SituacaoEnum.pendente, 
            SituacaoEnum.aprovado, 
            SituacaoEnum.reprovado
         ];
    }
                
}
