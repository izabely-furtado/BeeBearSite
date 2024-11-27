export enum TipoProdutoEnum {
    bebida = 'BEBIDA',
    comida = 'COMIDA',
    brinde = 'BRINDE',
    outro = 'OUTRO'
}
  

var randomExt = require("random-ext");
export class TipoProdutoEnumMock {
    public static getMock(): TipoProdutoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];//TipoProdutoEnumMock.lista[2];
    }

    public static getMockArray(): TipoProdutoEnum[] {
        return this.getLista();
    }

    public static getLista(): TipoProdutoEnum[] {
        return [TipoProdutoEnum.bebida, 
            TipoProdutoEnum.comida,
            TipoProdutoEnum.brinde,
            TipoProdutoEnum.outro
         ];
    }
                
}
