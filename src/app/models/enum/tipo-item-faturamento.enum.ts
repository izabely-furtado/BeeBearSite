export enum TipoItemFaturamentoEnum {
    geral = 'Geral',
    evento = 'Evento',
    produto = 'Produto',
}
  

var randomExt = require("random-ext");
export class TipoItemFaturamentoEnumMock {
    public static getMock(): TipoItemFaturamentoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];//TipoProdutoEnumMock.lista[2];
    }

    public static getMockArray(): TipoItemFaturamentoEnum[] {
        return this.getLista();
    }

    public static getLista(): TipoItemFaturamentoEnum[] {
        return [TipoItemFaturamentoEnum.geral, 
            TipoItemFaturamentoEnum.evento,
            TipoItemFaturamentoEnum.produto,
         ];
    }
                
}
