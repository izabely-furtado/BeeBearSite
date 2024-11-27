export enum SituacaoEstoqueEnum {
    em_estoque = 'Em estoque',
    baixo_estoque = 'Baixo Estoque',
    fora_estoque = 'Fora de Estoque'
}
  

var randomExt = require("random-ext");
export class SituacaoEstoqueEnumMock {
    public static getMock(): SituacaoEstoqueEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): SituacaoEstoqueEnum[] {
        return this.getLista();
    }

    public static getLista(): SituacaoEstoqueEnum[] {
        return [SituacaoEstoqueEnum.em_estoque, 
            SituacaoEstoqueEnum.baixo_estoque,
            SituacaoEstoqueEnum.fora_estoque
         ];
    }
                
}
