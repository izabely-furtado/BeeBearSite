export enum TipoDescontoEnum {
    porcentagem = 'Por Porcentagem',
    valor = 'Por valor'
}
  

var randomExt = require("random-ext");
export class TipoDescontoEnumMock {
    public static getMock(): TipoDescontoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoDescontoEnum[] {
        return TipoDescontoEnumMock.getLista();
    }

    public static getLista(): TipoDescontoEnum[] {
        return [TipoDescontoEnum.porcentagem, 
            TipoDescontoEnum.valor
         ];
    }
                
}
