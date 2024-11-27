export enum TipoMedidaEnum {
    bebida = 'Bebida', // fazer isso depois para medidas de bebida e de comida
    comida = 'Comida',
    brinde = 'Brinde',
    outro = 'Outro'
}
  

var randomExt = require("random-ext");
export class TipoMedidaEnumMock {
    public static getMock(): TipoMedidaEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];//TipoMedidaEnumMock.lista[2];
    }

    public static getMockArray(): TipoMedidaEnum[] {
        return this.getLista();
    }

    public static getLista(): TipoMedidaEnum[] {
        return [TipoMedidaEnum.bebida, 
            TipoMedidaEnum.comida,
            TipoMedidaEnum.brinde,
            TipoMedidaEnum.outro
         ];
    }
                
}
